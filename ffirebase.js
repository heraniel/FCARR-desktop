// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLN4r7GFyKWmXdUIR3u0wGVYjR9b7z4D0",
  authDomain: "intflood.firebaseapp.com",
  databaseURL: "https://intflood-default-rtdb.firebaseio.com",
  projectId: "intflood",
  storageBucket: "intflood.appspot.com",
  messagingSenderId: "1008198051242",
  appId: "1:1008198051242:web:87f02c0cdcfa6872caf7d3"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
