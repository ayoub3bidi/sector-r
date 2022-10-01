import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Sector R</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" alt="" />
        <span>Jackie</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar