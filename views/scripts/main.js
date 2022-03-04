
import {firebaseApp} from './firebase.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const auth = getAuth(firebaseApp);

//DOM Declarations
const accountBtn = document.querySelector('#accountBtn');
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn')

onAuthStateChanged(auth, (user) => {
    if (user) {
        //user is signed in

        loginBtn.style.display = 'none';
        loginBtn.style.visibility = 'hidden';

        logoutBtn.style.display = 'block';
        logoutBtn.style.visibility = 'visible';
    } else {
        // User is signed out

        logoutBtn.style.display = 'none';
        logoutBtn.style.visibility = 'hidden';

        loginBtn.style.display = 'block';
        loginBtn.style.visibility = 'visible';
    }
});

const logout = () => {
    console.log('log out')
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signed out')
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}
logoutBtn.addEventListener('click', () => logout())