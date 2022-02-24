import {signIn, auth} from './main.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const emailText = document.querySelector('#email');
const passwordText = document.querySelector('#password');
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('click')
  const email = emailText.value;
  const password = passwordText.value;

  signIn(email, password)
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "/";
  } else {
      console.log('no user is signed in')
  }
});