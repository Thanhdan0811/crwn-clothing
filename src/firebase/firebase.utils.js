import {initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider,signInWithPopup  } from "firebase/auth";


const config = {
  apiKey: "AIzaSyCVqKmBpd-vXIIC1cjj0ShQ-PnKSaihy-U",
  authDomain: "crwn-db-17486.firebaseapp.com",
  projectId: "crwn-db-17486",
  storageBucket: "crwn-db-17486.appspot.com",
  messagingSenderId: "246228672627",
  appId: "1:246228672627:web:702385d083347f48f18a06",
  measurementId: "G-YRWJ6V13CH",
};


const app = initializeApp(config);


export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;
