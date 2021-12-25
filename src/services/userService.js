import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDoc, getDocs, setDoc, deleteDoc, updateDoc, arrayUnion } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addUser = async function (userId, userData) {
    try {
        await setDoc(doc(db, "users", userId), userData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const userService = {
    addUser,
}

export default userService;