
import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());



  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
 // import { getAuth } from "firebase/auth";
  //import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { getStorage, ref, uploadBytes } from "firebase/storage";

  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHdkUN2SdtiMsPXY5-JwNlMnnIChIcU54",
    authDomain: "nathansblog-96854.firebaseapp.com",
    projectId: "nathansblog-96854",
    storageBucket: "nathansblog-96854.appspot.com",
    messagingSenderId: "168482100846",
    appId: "1:168482100846:web:636fe5ab9a1e130593b87f",
    measurementId: "G-0143CZX7H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const user;
/*const analytics = getAnalytics(app);
const auth = getAuth(app)
  
const loginButton = document.getElementById('loginbutton');


loginButton.addEventListener('click', () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User signed in:', userCredential.user);
        window.location.href = "../dist/admin.html";

      })
      .catch(error => {
        console.error('Error signing in:', error);
      });
  });
  



//image upload

*/




