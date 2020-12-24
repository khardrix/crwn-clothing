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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;          
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;