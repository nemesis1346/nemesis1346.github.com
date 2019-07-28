import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage'
//Firestore
 export const FirestoreConfig ={
  apiKey: "AIzaSyCaStbOcXxRGzjLmYzL_-IwTKdZAVjK5YY",
  authDomain: "cms-personal.firebaseapp.com",
  databaseURL: "https://cms-personal.firebaseio.com",
  projectId: "cms-personal",
  storageBucket: "cms-personal.appspot.com",
  messagingSenderId: "524767534957"
}

  //Just firebase
  export const FirebaseConfig = {
    apiKey: "AIzaSyCaStbOcXxRGzjLmYzL_-IwTKdZAVjK5YY",
    authDomain: "cms-personal.firebaseapp.com",
    databaseURL: "https://cms-personal.firebaseio.com",
    projectId: "cms-personal",
    storageBucket: "cms-personal.appspot.com",
    messagingSenderId: "524767534957"
  };

  firebase.initializeApp(FirebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  
  export default firebase;
