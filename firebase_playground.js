
process.env.FIREBASE_DEBUG = 'true';

// testFirebaseStorage.js
import { getStorage, ref, getDownloadURL } from 'firebase/storage';  // Import Firebase Storage SDK

// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { setLogLevel } from 'firebase/app';
setLogLevel('debug');

const FirebaseConfig = {
    apiKey: "AIzaSyApSjCi7NF-Nw26drJJunygCLaSwf8l4Bo",
    authDomain: "cms-personal.firebaseapp.com",
    databaseURL: "https://cms-personal.firebaseio.com",
    projectId: "cms-personal",
    storageBucket: "cms-personal.appspot.com",
    messagingSenderId: "524767534957",
    appId: "1:524767534957:web:88a0ef38e500595789c464"
};

const firebaseApp = initializeApp(FirebaseConfig);


async function testFirebaseStorage() {
    try {
        const storage = getStorage(firebaseApp);  // Initialize Firebase Storage
        // console.log('storage: ', storage)
        const fileRef = ref(storage, 'photos/logos/gitlab.jpg');  // Reference to your file
        // console.log('ref: ',fileRef)

        // Get the download URL for the file
        const url = await getDownloadURL(fileRef);
        console.log('File URL:', url);
    } catch (error) {
        console.error('Error fetching file from Firebase Storage:', error);
    }
}

// Call the function to test Firebase Storage
testFirebaseStorage();
