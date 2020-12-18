import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB02K4N9El5ekTUrsjjia_XXpflW99QI6w",
    authDomain: "crwn-db-8a249.firebaseapp.com",
    databaseURL: "https://crwn-db-8a249.firebaseio.com",
    projectId: "crwn-db-8a249",
    storageBucket: "crwn-db-8a249.appspot.com",
    messagingSenderId: "486404677261",
    appId: "1:486404677261:web:e2d7b59b02b0b23de54cc4",
    measurementId: "G-DSW7VQCLPT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;