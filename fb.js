import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

var config = {
  apiKey: "AIzaSyBtS-o43M3_9KjkylS8NLdnSEITTVh-8vY",
  authDomain: "captone-community.firebaseapp.com",
  databaseURL: "https://captone-community.firebaseio.com",
  projectId: "captone-community",
  storageBucket: "captone-community.appspot.com",
  messagingSenderId: "910518495512"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const functions = firebase.functions();

const auth = firebase.auth();

const db = firebase.firestore();

export { auth, db, functions };