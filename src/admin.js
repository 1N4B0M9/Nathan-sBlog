  // Import the functions you need from the SDKs you need
import _ from 'lodash';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
const analytics = getAnalytics(app);
const storage = getStorage()


/*
uploadButton.addEventListener('click', () => {
  print()
  const storageRef = ref(storage, document.getElementById('photo-input')) 
  const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
  uploadBytes(storageRef, bytes).then((snapshot) => {
    console.log('Uploaded an array!');
  });
 
});


*/
const fileInput = document.getElementById("photo-input");
const uploadButton = document.getElementById("upload-button");
uploadButton.addEventListener("click", () => {
    const file = fileInput.files[0];
    const pic = ref(storage, file.name);
    uploadBytes(pic, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  });


