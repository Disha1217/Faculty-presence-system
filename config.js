const firebase = require('firebase');



const firebaseConfig = {
    apiKey: "AIzaSyCLLIjSi3159RDRyekE6ifE8FVdoAJVwbU",
    authDomain: "faculty-presence-system-97b0b.firebaseapp.com",
    projectId: "faculty-presence-system-97b0b",
    storageBucket: "faculty-presence-system-97b0b.appspot.com",
    messagingSenderId: "525315774078",
    appId: "1:525315774078:web:216dfdf6cc3145491d6a2f",
    measurementId: "G-CWDVYMZRPC"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const presence = db.collection("presence");
module.exports=presence;