import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseConfig from '../config/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDoc, getDocs, setDoc, deleteDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
import toast from 'react-hot-toast';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const login = async function (email, password) {
    try {
        let res = signInWithEmailAndPassword(auth, email, password);
        return res;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw errorMessage;
    }
}

const logout = function(){
    signOut(auth).then(() => {
        console.log("Signed out");
        toast.success('Logged out')
      }).catch((error) => {
        toast.error('Couldn not log out');
        console.log("Some errror");
      });
}

const register = async function (email, password) {
    try {
            let res = createUserWithEmailAndPassword(auth, email, password);
            return res;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw errorMessage;
        }
}

const addRecipe = async function(data){

      try {
        const docRef = await addDoc(collection(db, "recepies"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // Add a new document in collection "recepies"
}

const updateRecipe = async function (recipeId, data) {
    try {
        await setDoc(doc(db, "recepies", recipeId), data);
        console.log(`Document with ID  succesfully updated to: ${data}`);
    } catch (e) {
        console.error("Error editing document: ", e);
    }
}

const deleteRecipeById = async function(recipeId){
    try {
        await deleteDoc(doc(db, "recepies", recipeId)); 
    } catch (error) {
        console.error("Error editing document: ", error);
    }
}

const getAllRecipes = async function () {

    let allRecipes = [];
    const response = await getDocs(collection(db, "recepies"));
    
    response.forEach(recipe => {
        const { id } = recipe;
        const data = recipe.data();
        let currentRecipe = {
            id,
            recipe: data,
        }
        allRecipes.push(currentRecipe);
    })
    
    return allRecipes;
}

const getRecipeById = async function (recipeId) {

    const docRef = doc(db, "recepies", recipeId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }

    return docSnap.data();
}

const addComment =  async function (recipeId, comment){

    const recipeRef = doc(db, "recepies", recipeId);

    await updateDoc(recipeRef, {
        recipeComments: arrayUnion(comment)
    });
}


const firebaseService = {
    auth,
    login,
    logout,
    register,
    addRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipeById,
    addComment
}

export default firebaseService;