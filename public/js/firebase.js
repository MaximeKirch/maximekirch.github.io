
import {} from 'firebase/database'

// Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxzQXyJMwM8dqVkHExhjz4Lxs3wqJ1Hss",
    authDomain: "plenary-axon-267021.firebasedatabase.app",
    databaseURL: "https://plenary-axon-267021-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "plenary-axon-267021",
    storageBucket: "plenary-axon-267021.appspot.com",
    messagingSenderId: "420623649811",
    appId: "1:420623649811:web:ef9c61e9327337912b83e6",
    measurementId: "G-63YJRQ8S89"
  };

//Initialize Firebase App 

firebase.initializeApp(firebaseConfig);

// Reference infos collection 

let contactInfos = firebase.database().ref('infos'); 

//Listen for a submit 
document.querySelector('.form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get input values 

  let name = document.querySelector('#inputName').value;
  let email = document.querySelector('#inputEmail').value;
  let object = document.querySelector('#inputObject').value;
  let message = document.querySelector('#inputMessage').value;

  console.log(name, email, object, message);

  saveContactInfos(name, email, object, message);

}

// Save infos to Firebase 

 function saveContactInfos(name, email, object, message) {

    let newContactInfo = contactInfos.push(); 

    newContactInfo.set({

        name: name,
        email: email, 
        object: object,
        message: message
    });
 }
 
