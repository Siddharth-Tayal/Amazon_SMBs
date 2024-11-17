import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"

const Messages = () => {
  const {messages,loading}=useGetMessages()
  console.log("messages:",messages)
  console.log("loading:",loading)
  return (
    <div className="px-4 flex-2 overflow-auto">
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default Messages
