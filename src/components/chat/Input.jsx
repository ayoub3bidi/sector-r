import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type something here...'/>
      <div className="send">
      <img src="https://i.ibb.co/wcs6VwJ/attach.png" alt="" />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor="file">   
          <img src="https://i.ibb.co/d2c3j17/img.png" alt=""/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input