import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
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