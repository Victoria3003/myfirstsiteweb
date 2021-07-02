import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
    measurementId: "xxx"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage };
export const db = firebaseApp.firestore();