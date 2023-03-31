/*{ <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional }*/

  const firebaseConfig = {
    apiKey: "AIzaSyDtWGwvoxTgR8BNcyH01oRPDm9FxpGEWZE",
    authDomain: "mir-labs.firebaseapp.com",
    databaseURL: "https://mir-labs-default-rtdb.firebaseio.com",
    projectId: "mir-labs",
    storageBucket: "mir-labs.appspot.com",
    messagingSenderId: "649918640868",
    appId: "1:649918640868:web:65c2c7fc5d446db31b32f1",
    measurementId: "G-HPE99ETVYN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 var ContactUsFormDB =  firebase.database().ref('ContactUsForm')
 document.getElementById('ContactUsForm').addEventListener("submit",submitForm);

 function submitForm(e)
 {
    e.preventDefault();
    var name = getElementVal('name');
    var mobile = getElementVal('mobile');
    var email = getElementVal('email');
    var message = getElementVal('msg');

    saveMessage(name, mobile, email, message);

 }
 const saveMessage = (name, mobile, email, message) =>
 {
    var newContactForm = ContactUsFormDB.push();

    newContactForm.set({
        name : name,
        mobile : mobile,
        email : email,
        message : msg,
    })
 }
 const getElementVal = (id) => 
 {
    return document.getElementById(id).value;
 }