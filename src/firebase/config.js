import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIurRqMMjACU7sVB0nE1GB9yXfLK2aTIw",
  authDomain: "sector-r.firebaseapp.com",
  projectId: "sector-r",
  storageBucket: "sector-r.appspot.com",
  messagingSenderId: "816517679916",
  appId: "1:816517679916:web:a855f3911b25d186633a89"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }