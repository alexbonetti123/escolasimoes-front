// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWFO5PPHOoi-S8xW0ojGIfI4YseEgPf1o",
  authDomain: "escolasimoes-77ea8.firebaseapp.com",
  projectId: "escolasimoes-77ea8",
  storageBucket: "escolasimoes-77ea8.appspot.com",
  messagingSenderId: "486020214611",
  appId: "1:486020214611:web:3974f648bd1a6a6d44bba6",
  storageBucket:"gs://escolasimoes-77ea8.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase