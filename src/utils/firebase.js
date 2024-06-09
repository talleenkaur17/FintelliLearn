// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAnQcyNU1Y3XZPockNbzLCF3Fg3N2CUljQ",
  authDomain: "fintelli-7459a.firebaseapp.com",
  projectId: "fintelli-7459a",
  storageBucket: "fintelli-7459a.appspot.com",
  messagingSenderId: "292682561227",
  appId: "1:292682561227:web:eb771cf347755caf914d4e",
  measurementId: "G-HNH6PLJ58V",
};
/*

const firebaseConfig = {
  apiKey: "AIzaSyDGYyn3xzA-KfzE1pK8iTnRksknsbOsKZA",
  authDomain: "fintellilearn-d31b1.firebaseapp.com",
  projectId: "fintellilearn-d31b1",
  storageBucket: "fintellilearn-d31b1.appspot.com",
  messagingSenderId: "953464574691",
  appId: "1:953464574691:web:c38faae2e32ac5160dabd6",
  measurementId: "G-C7N7RJ36GC",
};
*/
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, analytics, db };
