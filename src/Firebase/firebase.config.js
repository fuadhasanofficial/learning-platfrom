// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKRZ0yEgacBJp-JxdAgaqtlFqp8X7Hj-I",
    authDomain: "your-skill.firebaseapp.com",
    projectId: "your-skill",
    storageBucket: "your-skill.appspot.com",
    messagingSenderId: "443292367870",
    appId: "1:443292367870:web:fbde4e89b154d00239deaf",
    measurementId: "G-61LHCKPPYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
const analytics = getAnalytics(app);