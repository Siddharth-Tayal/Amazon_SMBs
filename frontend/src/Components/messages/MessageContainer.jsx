import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
// import { set } from "mongoose"


const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation}=useConversation()

  useEffect(()=>{
    //cleanup function
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <>
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (<NoChatSelected />) : (<>
        {/* <Header/> */}
        <div className="bg-slate-500 px-4 mb-2 py-2">
          <div className="text-gray-900 font-medium">{selectedConversation.fullName}</div>
        </div>
        <Messages/>
        <MessageInput/>
      </>
      )}
    </div>
    </>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  return(

    <div className="flex items-center justify-center h-full w-full">
      <div className="text-gray-200 px-4 text-center sm:text-lg md:text-xl font-medium flex flex-col items-center gap-2">
        <p>Welcome Madhur Kumar</p>
        <p>Start a conversation</p>
      </div>
    </div>
  )
}

