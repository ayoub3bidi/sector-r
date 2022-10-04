import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src="https://i.ibb.co/pX2hLmx/cam.png" alt="Cam"/>
          <img src="https://i.ibb.co/SxM362b/add.png" alt="Add"/>
          <img src="https://i.ibb.co/gt96XbQ/more.png" alt="More"/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat