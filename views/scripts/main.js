import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

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

//DOM Declarations
const nameText = document.querySelector('#name');
const signUpForm = document.querySelector('#signUpForm');

const emailText = document.querySelector('#email');
const passwordText = document.querySelector('#password');
const loginForm = document.querySelector('#loginForm');

const errorMessageDOM = document.querySelector('.form-error');

const accountBtn = document.querySelector('#accountBtn')

const auth = getAuth(firebaseApp);

const signIn = (email, password) => {
    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log(`${user.email} has signed in!`);
 
        window.location.href = "/";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
        errorMessageDOM.innerHTML = errorCode.replace("auth/", "");;
        errorMessageDOM.style.visibility = 'visible';
        errorMessageDOM.style.display = 'block';
        // ..
    });
}

const signUp = (email, password) => {
  createUserWithEmailAndPassword  (auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log(`${user.email} has signed in!`)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
        errorMessageDOM.innerHTML = errorCode.replace("auth/", "");;
        errorMessageDOM.style.visibility = 'visible';
        errorMessageDOM.style.display = 'block';
        // ..
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user.uid)
        // ...
    } else {
        // User is signed out
        // ...
        console.log('no user is signed in')
    }
});

const logout = () => {
    console.log('log out')
}
accountBtn.addEventListener('click', logout())
export {
    signIn,
    signUp
}