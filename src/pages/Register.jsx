import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // ? Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // ? Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // ? Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // ? Create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // ? Create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };



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
                { loading && <span>Uploading and compressing the image.<br/>Please wait...</span> }
                { err && <span>Something went wrong</span> }
            </form>
            <p>You have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register