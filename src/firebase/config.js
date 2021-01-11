import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC6FwzPQtpjM6ZNtKgPX99sHIJ0-Epw3OM",
  authDomain: "imgupload-9b396.firebaseapp.com",
  projectId: "imgupload-9b396",
  storageBucket: "imgupload-9b396.appspot.com",
  messagingSenderId: "900154473381",
  appId: "1:900154473381:web:583477b65f87ba1d4f464c"
}

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }