import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;

    let conversation=await Conversation.findOne({
        participants: { $all: [receiverId, senderId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId,receiverId],
      });
    }

    const newMessage= new Message({
      senderId,
      receiverId,
      message,
    })

    if(newMessage){
      conversation.messages.push(newMessage._id);
    }

    //SOCKET IO MESSAGE METHODS

    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(),newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in message controller sendMessage ",error.message);
    res.status( 500 ).json({error:"Internal Server Error"});
  }
};

export const getMessages = async (req, res) => {
  try {
    const {id:userToChatId}=req.params;
    const senderId=req.user._id;

    const conversation=await Conversation.findOne({
      participants: { $all: [userToChatId, senderId] },
    }).populate("messages");

    res.status(200).json(conversation.messages);

    if(!conversation){
      return res.status(200).json([]);
    }

    const messages=conversation.messages

    res.status(200).json(messages);
    
  } catch (error) {
    console.log("Error in message controller sendMessage ",error.message);
    res.status( 500 ).json({error:"Internal Server Error"});
  }
}

