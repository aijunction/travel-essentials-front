// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz9Dxgac2tDQtYQLfhAw1iopAHMbU0Zys",
  authDomain: "travel-essentials.firebaseapp.com",
  projectId: "travel-essentials",
  storageBucket: "travel-essentials.appspot.com",
  messagingSenderId: "891698387033",
  appId: "1:891698387033:web:460cf1c26ffaab91e07948",
  measurementId: "G-1RBPSB6D91",
};

// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// //firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
