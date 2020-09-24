// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDbeC4YVowxDSS7CcT-PPMeL1KcQwGE9Lc",
    authDomain: "whats-app-clone-45887.firebaseapp.com",
    databaseURL: "https://whats-app-clone-45887.firebaseio.com",
    projectId: "whats-app-clone-45887",
    storageBucket: "whats-app-clone-45887.appspot.com",
    messagingSenderId: "229997608041",
    appId: "1:229997608041:web:45e02dbdc99430448676f8",
    measurementId: "G-RJD7BJFT8P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.
  GoogleAuthProvider();

  export { auth,provider };
  export default db;