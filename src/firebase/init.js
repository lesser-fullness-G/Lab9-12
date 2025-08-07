import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPHIg-X_4rQEaw7UE1RBy4P8xcQgGkWJ0",
  authDomain: "lab7-project-90d5b.firebaseapp.com",
  projectId: "lab7-project-90d5b",
  storageBucket: "lab7-project-90d5b.firebasestorage.app",
  messagingSenderId: "35108914726",
  appId: "1:35108914726:web:f8c5a4cfd0631b16f948e7"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;