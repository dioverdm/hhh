// For Firebase JS SDK v7.20.0 and later, measurementId is optional et installer les dépendances npm i firebase

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlkI7q4eZTgEvJTNCNmx8cGxwjPys_u3g",
    authDomain: "whatsapp-mern-6f9a2.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-6f9a2.firebaseio.com",
    projectId: "whatsapp-mern-6f9a2",
    storageBucket: "whatsapp-mern-6f9a2.appspot.com",
    messagingSenderId: "736307778822",
    appId: "1:736307778822:web:b9eae762336d440d537a87",
    measurementId: "G-Y58N4R14F6"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const login = firebase.auth();
 const provider = firebase.auth.GoogleAuthProvider();

 export { auth , provider };

