
  // Import the functions you need from the SDKs you need
  import initializeApp  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  import getAnalytics  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxzQXyJMwM8dqVkHExhjz4Lxs3wqJ1Hss",
    authDomain: "plenary-axon-267021.firebaseapp.com",
    projectId: "plenary-axon-267021",
    storageBucket: "plenary-axon-267021.appspot.com",
    messagingSenderId: "420623649811",
    appId: "1:420623649811:web:ef9c61e9327337912b83e6",
    measurementId: "G-63YJRQ8S89"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
