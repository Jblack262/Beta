import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';

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

export {
    firebaseApp
}