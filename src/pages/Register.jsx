import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Sector R</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" style={{ display: "none" }} id="file"/>
                <label htmlFor="file">
                    <img src="https://i.ibb.co/d2c3j17/img.png" alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You have an account? Login</p>
        </div>
    </div>
  )
}

export default Register