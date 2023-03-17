// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "pokedex-7871d.firebaseapp.com",
	projectId: "pokedex-7871d",
	storageBucket: "pokedex-7871d.appspot.com",
	messagingSenderId: "505249370048",
	appId: "1:505249370048:web:595a75eb94a5aeb20fc225",
	measurementId: "G-JL4M8TCG95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const db = getFirestore(app);

const usersRef = collection(db, "users");
const pokemonListRef = collection(db, "pokemonList");

export { firebaseAuth, pokemonListRef, usersRef, db };
