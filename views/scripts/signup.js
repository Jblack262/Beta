import {signUp} from './main.js';

const nameText = document.querySelector('#name');
const signUpForm = document.querySelector('#signUpForm');
const emailText = document.querySelector('#email');
const passwordText = document.querySelector('#password');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('click')
  const email = emailText.value;
  const password = passwordText.value;

  signUp(email, password)
})