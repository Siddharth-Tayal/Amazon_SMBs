// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth'; // Importing and renaming 'signOut'
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBD4HVAaxSZTukKIElQsgFadazbm3PqLe0",
    authDomain: "smbs-6a393.firebaseapp.com",
    projectId: "smbs-6a393",
    storageBucket: "smbs-6a393.firebasestorage.app",
    messagingSenderId: "560413463585",
    appId: "1:560413463585:web:ba5dd6bfea2f837f813f60",
    measurementId: "G-7SRMCLET6S"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Function to register a user with email, password, and username
export const registerUser = async (email, password, username) => {
    try {
        // First, create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Now, store the username and other user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            username: username,
            email: user.email,
            createdAt: new Date().toISOString(),
        });

        // Return the user info if needed
        return userCredential;
    } catch (error) {
        console.error("Error during registration:", error.message);
        throw error;
    }
};

// Function to sign in a user
export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error during sign-in:", error.message);
        throw error;
    }
};

// Function to sign out a user (using Firebase's signOut renamed as firebaseSignOut)
export const signOutUser = async () => {
    try {
        await firebaseSignOut(auth);
    } catch (error) {
        console.error("Error during sign-out:", error.message);
        throw error;
    }
};

// Listen for auth state changes (login/logout)
export const listenForAuthStateChanges = (callback) => {
    return auth.onAuthStateChanged(callback);
};

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc };
