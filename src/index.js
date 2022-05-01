import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from "redux";
import rootReducer from './Redux/Reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBMdhYu6G6Jjpqx1eJqH29dY15qwPTHn4",
  authDomain: "resume-builder-c84ed.firebaseapp.com",
  projectId: "resume-builder-c84ed",
  storageBucket: "resume-builder-c84ed.appspot.com",
  messagingSenderId: "73863559733",
  appId: "1:73863559733:web:217d23145e11297068cf7c",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
); //binding for redux to get firestore

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
); 
