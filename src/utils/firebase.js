// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGYyn3xzA-KfzE1pK8iTnRksknsbOsKZA",
  authDomain: "fintellilearn-d31b1.firebaseapp.com",
  projectId: "fintellilearn-d31b1",
  storageBucket: "fintellilearn-d31b1.appspot.com",
  messagingSenderId: "953464574691",
  appId: "1:953464574691:web:c38faae2e32ac5160dabd6",
  measurementId: "G-C7N7RJ36GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export { app, auth, analytics };