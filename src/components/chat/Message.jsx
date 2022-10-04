import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/pexels-photo-1382731.jpeg?resize=500%2C750&ssl=1" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/pexels-photo-1382731.jpeg?resize=500%2C750&ssl=1" alt="" />
      </div>
    </div>
  )
}

export default Message