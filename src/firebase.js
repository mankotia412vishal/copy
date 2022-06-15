import firebase from "firebase"

// ProblemAuth
// const firebaseConfig = {
//   apiKey: "AIzaSyC9dnd1KviDPEcvg3zDx7Gknc1KlSvdjcU",
//   authDomain: "problemauth-da73f.firebaseapp.com",
//   projectId: "problemauth-da73f",
//   storageBucket: "problemauth-da73f.appspot.com",
//   messagingSenderId: "399517848095",
//   appId: "1:399517848095:web:f33675fec6e5363352fb2a"
// };


// VishalProject

const firebaseConfig = {
  apiKey: "AIzaSyDjV4aDFBK-_eQ8NKEa1gO0TOuOijLlQ80",
  authDomain: "vishalproject-47d7a.firebaseapp.com",
  projectId: "vishalproject-47d7a",
  storageBucket: "vishalproject-47d7a.appspot.com",
  messagingSenderId: "678515285625",
  appId: "1:678515285625:web:e68e0b0ccd2fa230e3fea8"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const storage=firebase.storage();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{db,storage,auth,provider};