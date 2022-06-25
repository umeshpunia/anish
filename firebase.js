import firebase from 'firebase/compat/app';
import firestore from 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqm-E8AcfU2u7_E5Kr--ht-WXCOUFhDZ4",
  authDomain: "ultra-fast-browser.firebaseapp.com",
  databaseURL: "https://ultra-fast-browser.firebaseio.com",
  projectId: "ultra-fast-browser",
  storageBucket: "ultra-fast-browser.appspot.com",
  messagingSenderId: "882645414768",
  appId: "1:882645414768:web:c6c7185b56f468fca2d5b5",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;