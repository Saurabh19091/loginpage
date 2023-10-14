// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"; // Import from firebase-auth module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnIK30G41-NNmyjeHqUvU8hamg4b0t984",
    authDomain: "signup-page-71274.firebaseapp.com",
    projectId: "signup-page-71274",
    storageBucket: "signup-page-71274.appspot.com",
    messagingSenderId: "355401902280",
    appId: "1:355401902280:web:3fbea00e0b1b37e96d9dfd",
    measurementId: "G-8HHJKMNZ05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Getting All the object of html

var email = document.getElementById("email")
var password = document.getElementById("password")

window.login = function(e) {
    e.preventDefault();
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var errorMessage = document.getElementById("error-message"); // Get the error message element
    var obj = {
        email: email.value,
        password: password.value
    };

    // Check if email and password are empty
    if (!obj.email || !obj.password) {
        errorMessage.textContent = "Please enter both email and password."; // Display an error message
        return; // Prevent further execution
    }

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(userCredential) {
            var user = userCredential.user;
            console.log(user.uid);
            alert("Logged in Successfully");
        })
        .catch(function(err) {
            if (err.code === "auth/user-not-found") {
                displayError("Email not registered. Please sign up.");
            } else if (err.code === "auth/invalid-login-credentials") {
                displayError("Wrong email and password. Please try again.");
            } else {
                alert("Error: " + err.message);
            }
        })



    console.log(obj);
}