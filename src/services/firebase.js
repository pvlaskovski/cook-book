import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseConfig from '../config/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore"; 
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
    //         console.log(user);
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
        console.log("Some errror");
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

const addRecipe = async function(data){
    // const data = {
    //     recipeName: 'Test Recipe',
    //     recipeOverview: 'Some overview'
    //     recipeType: 'Dessert',
    //     recipeDifficulty: 'easy',
    //     items: [{item: "pepper", quantity: "5 gr"}, {item: "rice", quantity: "200 gr"}],
    //     steps: ["first step", "second step", "third step"],
    //     imgUrl: "https://www.freepnglogos.com/uploads/cake-png/cake-png-transparent-cake-images-pluspng-21.png",
    //     rating: 0,
    //     likes: 0
    //   };

      try {
        const docRef = await addDoc(collection(db, "recepies"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // Add a new document in collection "recepies"
        // const res = await db.collection('recepies').set(data);
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
        // console.log(data);
        allRecipes.push(currentRecipe);
    })
    
    return allRecipes;

}

const firebaseService = {
    auth,
    login,
    logout,
    register,
    addRecipe,
    getAllRecipes,
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

