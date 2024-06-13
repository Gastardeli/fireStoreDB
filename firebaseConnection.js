
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Minha Chave Api",
  authDomain: "meusistema-d7c6a.firebaseapp.com",
  projectId: "meusistema-d7c6a",
  storageBucket: "meusistema-d7c6a.appspot.com",
  messagingSenderId: "626103234687",
  appId: "1:626103234687:web:f5ff45ecd36e45f0424f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};