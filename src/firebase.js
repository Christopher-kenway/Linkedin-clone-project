// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2FoSAo3u7dVxDdI2BP8YC1OBo5-MXrLE",
  authDomain: "linkedin-clone-17964.firebaseapp.com",
  projectId: "linkedin-clone-17964",
  storageBucket: "linkedin-clone-17964.appspot.com",
  messagingSenderId: "140893185001",
  appId: "1:140893185001:web:d50b3a7ca002d32007e178",
  measurementId: "G-ZSEEM8KP8Y"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

    export {db, auth};