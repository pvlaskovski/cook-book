import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTxbxafSM5DZ6yUBOpxxtNOi8pAUQ2h7E",
    authDomain: "cook-book-fd3de.firebaseapp.com",
    databaseURL: "https://cook-book-fd3de.firebaseio.com",
    projectId: "cook-book-fd3de",
    storageBucket: "cook-book-fd3de.appspot.com",
    messagingSenderId: "393146157069",
    appId: "1:393146157069:web:eaa2a72d7b3f793e696d44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signIn = function (email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

const register = function (email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}



const firebaseService = {
    signIn,
    register
}


export default firebaseService;


// const app = initializeApp(firebaseConfig);

// import { initializeApp } from 'firebase/app';

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import firebaseConfig from '../config/firebase';

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }

//   Create a new collection and a document using the following example code.
// const docRef = db.collection('users').doc('alovelace');

// await docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });

