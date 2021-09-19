import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCU4rKNUldjt_sOOUTv-GW9DzbuYN9aehk",
    authDomain: "clone-26e1c.firebaseapp.com",
    projectId: "clone-26e1c",
    storageBucket: "clone-26e1c.appspot.com",
    messagingSenderId: "605004265470",
    appId: "1:605004265470:web:be80d8bb72e29f38eeb2af",
    measurementId: "G-3JLG85LZZH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};