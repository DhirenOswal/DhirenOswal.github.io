import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAI8s_b5vyjHUHLUd7RWP6VqB53TZAt0zM",
    authDomain: "orbiz-f7ec8.firebaseapp.com",
    projectId: "orbiz-f7ec8",
    storageBucket: "orbiz-f7ec8.appspot.com",
    messagingSenderId: "104420660148",
    appId: "1:104420660148:web:696d59fc2b018c1ac018e1",
    measurementId: "G-VV9L1TMVP9",
};

const app = initializeApp(firebaseConfig);

export const Auth = getAuth();
export const db = getFirestore(app);
