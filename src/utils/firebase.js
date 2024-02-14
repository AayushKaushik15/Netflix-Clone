// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-y6Io9XIgMk_P3Bpu42DcHBQdrIk7cng",
  authDomain: "netflix-clone-bbe76.firebaseapp.com",
  projectId: "netflix-clone-bbe76",
  storageBucket: "netflix-clone-bbe76.appspot.com",
  messagingSenderId: "97507040927",
  appId: "1:97507040927:web:3f043c7db3ba634b900caa",
  measurementId: "G-J0LMXPYH5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);