import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDNyZiLXHUadV9pijBfwhFjWKBZ14pR3Y",
  authDomain: "contacts-98061.firebaseapp.com",
  projectId: "contacts-98061",
  storageBucket: "contacts-98061.appspot.com",
  messagingSenderId: "341119901133",
  appId: "1:341119901133:web:7a61090faefd9ba12cb884",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore;
