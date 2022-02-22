import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

//DOM Declarations
const emailText = document.querySelector('#email');
const passwordText = document.querySelector('#password');
const signUpForm = document.querySelector('#signUpForm');

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCb5swBkAaVM_men9boNI9YgEFPvqgShQE",
    authDomain: "beta-media.firebaseapp.com",
    databaseURL: "https://beta-media-default-rtdb.firebaseio.com",
    projectId: "beta-media",
    storageBucket: "beta-media.appspot.com",
    messagingSenderId: "516115029123",
    appId: "1:516115029123:web:b2676c4d7aebd309988fb6",
    measurementId: "G-B91HSENCSH"
});
const auth = getAuth(firebaseApp);

const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log(`${user.email} has signed up!`)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
        // ..
    });
}
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click')
    const email = emailText.value;
    const password = passwordText.value;

    signUp(email, password)
})