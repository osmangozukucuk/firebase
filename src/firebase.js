import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDX5GHWkDn2NjPwTaIdLkZnwLF00M0y32Y",
  
    authDomain: "portfolio-login-sign.firebaseapp.com",
  
    projectId: "portfolio-login-sign",
  
    storageBucket: "portfolio-login-sign.appspot.com",
  
    messagingSenderId: "423882898972",
  
    appId: "1:423882898972:web:1ee0b069226e4c033ca9d9",
  
    measurementId: "G-E73217R82V"
  
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();