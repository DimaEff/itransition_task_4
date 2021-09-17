import firebase from 'firebase';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyC-MX56pv0NfkOKXep5SZ2jektD9O5zeQg",
    authDomain: "itransition-4.firebaseapp.com",
    projectId: "itransition-4",
    storageBucket: "itransition-4.appspot.com",
    messagingSenderId: "605517633452",
    appId: "1:605517633452:web:d42f344c4beb9e848e4c09",
});

export const db = app.firestore();
export const auth = app.auth();

export const providers = {
    facebook: new firebase.auth.FacebookAuthProvider(),
    google: new firebase.auth.GoogleAuthProvider(),
    github: new firebase.auth.GithubAuthProvider(),
};