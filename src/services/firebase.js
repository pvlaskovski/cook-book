import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseConfig from '../config/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';


//WORKING
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//ISSUE
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
    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Registered in 
    //         const user = userCredential.user;
    //         toast.success("Welcome " + user.email);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //         toast.error("Incorrect username or password");
    //     });
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
       
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     });
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
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    return docSnap.data();
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

