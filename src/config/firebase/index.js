import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMfvKbRXvGSgwBF9in4Ol6DwYBQZHcX8w",
  authDomain: "react-crud-943c5.firebaseapp.com",
  projectId: "react-crud-943c5",
  storageBucket: "react-crud-943c5.appspot.com",
  messagingSenderId: "373382125358",
  appId: "1:373382125358:web:cd2cd998e7666fe5a1ccbf",
  measurementId: "G-NLRM3BTFDZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
