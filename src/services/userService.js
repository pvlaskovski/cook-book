import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addUser = async function (userId, userData) {
    try {
        await setDoc(doc(db, "users", userId), userData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getUserById = async function (userId) {
    const docRef = doc(db, "users", userId);

    const user = await getDoc(docRef);

    if (user.exists()) {
        // console.log("User data:", user.data());
    } else {
        // console.log("No such user!");
    }

    return user.data();
}

const updateFavouriteRecipes = async function (userId, favouriteRecipes) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
            favouriteRecipes: favouriteRecipes
        });
        // console.log(`Favourite recipes succesfully updated to: ${favouriteRecipes}`);
    } catch (e) {
        throw "Error updating favourite recipes:"
    }
}

const getFavouriteRecipes = async function (userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Fav recipe data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        // console.log("No favourite recipes!");
    }

    return docSnap.data();
}

const userService = {
    addUser,
    getUserById,
    getFavouriteRecipes,
    updateFavouriteRecipes,
}

export default userService;