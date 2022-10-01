import { useState } from 'react'
import { auth, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, username);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',  
        (error) => {
          setErr(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: username,
              photoURL: downloadURL
            })
          });
        }
      );
    } catch (err) { setErr(true) }

  }



  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Sector R</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" style={{ display: "none" }} id="file"/>
                <label htmlFor="file">
                    <img src="https://i.ibb.co/d2c3j17/img.png" alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                { err && <span>Something went wrong</span> }
            </form>
            <p>You have an account? Login</p>
        </div>
    </div>
  )
}

export default Register