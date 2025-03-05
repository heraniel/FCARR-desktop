// Import Firebase authentication
import { auth, signInWithEmailAndPassword } from "../firebase.js";

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (!loginForm) {
        console.error("Error: login-form not found!");
        return;
    }

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login Successful:", userCredential.user);

            // Redirect to dashboard
            window.location.href = "../html/dashboard.html";
        } catch (error) {
            alert("Invalid username or password. Please try again.");
            console.error("Login Error:", error.message);
        }
    });
});
