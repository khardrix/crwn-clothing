import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users') 
    //.doc(oSJ1Nx13iIfxfJVuvgBG'); <-- 
        // if we wanted to go into this users and find this document (i.e. that user), 
        // we would use this line of code.
        // If we wanted the chain further and say and of that user document you just got me,
        // I want his collection of cartItems. You would do this by adding: 
        // .collection('cartItems) and then we can chain even farther and get that 
        // specific cartItem like the blue hat or the leather jacket by adding
        // .doc('QUdFI4E918jDGLP13RqG')
        // This item is nested inside Users, nested inside another user (ID), 
        // nested inside cart items and finally the leather jacket with the ID
        // 'QUdFI4E918jDGLP13RqG'.

// We could also que this item with the following code: 
firestore.doc('users/oSJ1Nx13iIfxfJVuvgBG/cartItems/QUdFI4E918jDGLP13RqG');

