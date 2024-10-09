// React libraries:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";

// Redux and Middleware
import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Firebase libraries
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ReactReduxFirebaseProvider, createFirestoreInstance } from 'react-redux-firebase'; // Correct import

export const FirebaseConfig = {
    apiKey: "AIzaSyCaStbOcXxRGzjLmYzL_-IwTKdZAVjK5YY",
    authDomain: "cms-personal.firebaseapp.com",
    databaseURL: "https://cms-personal.firebaseio.com",
    projectId: "cms-personal",
    storageBucket: "cms-personal.appspot.com",
    messagingSenderId: "524767534957"
};


// Initialize Firebase App
const firebaseApp = initializeApp(FirebaseConfig);

// Initialize Firebase Services
const firestore = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

// React Redux Firebase configuration
const rrfConfig = {
    userProfile: 'users', // Firestore collection where user profiles are stored
    useFirestoreForProfile: true // Use Firestore for profile instead of Realtime Database
};

// Enhacers for Redux store
const store = compose(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase: auth, getFirestore: firestore })),
    )
)

// React Redux Firebase provider props
const rrfProps = {
    firebase: firebaseApp,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // Pass createFirestoreInstance
};

// Wait for Firebase Auth to be ready before rendering the app
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>,
        document.getElementById('root'));
})


