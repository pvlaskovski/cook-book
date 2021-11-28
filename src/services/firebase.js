import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../config/firebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = function (email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registered in 
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
    login,
    register
}


export default firebaseService;


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

