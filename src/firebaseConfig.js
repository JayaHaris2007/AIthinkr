import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYBv7ogca_1AdsqRo2-XXhsmsnCynN6V0",
  authDomain: "aithinkr.firebaseapp.com",
  projectId: "aithinkr",
  storageBucket: "aithinkr.firebasestorage.app",
  messagingSenderId: "637158458972",
  appId: "1:637158458972:web:14a70892b9f20ee5258899",
  measurementId: "G-FPDVEM1TLK"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);