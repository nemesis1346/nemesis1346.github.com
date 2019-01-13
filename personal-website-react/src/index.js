import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import FirestoreConfig from './api/FirebaseConfig';
import FirebaseConfig from './api/FirebaseConfig';
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(FirestoreConfig),
        reactReduxFirebase(FirebaseConfig)
    )
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


