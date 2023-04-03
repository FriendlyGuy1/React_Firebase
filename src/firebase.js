import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBGhmUJscNC_tODK_GtmfmYY7WE3W1KERM",
    authDomain: "contacts-5a9b6.firebaseapp.com",
    projectId: "contacts-5a9b6",
    storageBucket: "contacts-5a9b6.appspot.com",
    messagingSenderId: "158439864071",
    appId: "1:158439864071:web:9b3f30e9aa371c879977a2",
  };
  

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export default firestore