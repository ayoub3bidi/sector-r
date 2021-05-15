import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDh0vPQ4p9Z0DFDqx9S8zVc0vV5EPVgKLM",
    authDomain: "sector-r-database.firebaseapp.com",
    projectId: "sector-r-database",
    storageBucket: "sector-r-database.appspot.com",
    messagingSenderId: "90155331711",
    appId: "1:90155331711:web:155c403c54504ba8ae4f4a"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFireStore, timestamp }