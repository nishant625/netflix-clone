
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDU3vjTJg8liemkRj1u-ufQJQ8T3kaB8KQ",
  authDomain: "flix-625.firebaseapp.com",
  projectId: "flix-625",
  storageBucket: "flix-625.appspot.com",
  messagingSenderId: "912980432824",
  appId: "1:912980432824:web:b0de9fa541f39bff98214d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {auth};

