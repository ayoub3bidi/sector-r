import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Sector R</span>
            <span className="title">Login</span>
            <form>
                <input type="text" placeholder='Username or Email'/>
                <input type="password" placeholder='Password'/>
                <button>Login</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login