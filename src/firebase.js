import firebase from "firebase"


// 7 files in this config file
// VippyDrive

const firebaseConfig = {
    apiKey: "AIzaSyB8ue5qaXtLfjMYcPnmaXu6oZ2hqYPfz9U",
    authDomain: "drive-clone-c5965.firebaseapp.com",
    projectId: "drive-clone-c5965",
    storageBucket: "drive-clone-c5965.appspot.com",
    messagingSenderId: "863537079821",
    appId: "1:863537079821:web:9fd6c1a6f3d4a142cbd744"
  };


// 3 files in this config file

// const firebaseConfig = {
//   apiKey: "AIzaSyCKV2TDUoIsWB9hEGWZfVDEUMY6NiQkwcM",
//   authDomain: "vippydrive.firebaseapp.com",
//   projectId: "vippydrive",
//   storageBucket: "vippydrive.appspot.com",
//   messagingSenderId: "130422873961",
//   appId: "1:130422873961:web:6bd11371080872a63527f8"
// };


// new one for Project with only file
// const firebaseConfig = {
//   apiKey: "AIzaSyB7RXOdI_pzy03ULBC591dde2XaaFEyafU",
//   authDomain: "sdp-vishal-sem4.firebaseapp.com",
//   projectId: "sdp-vishal-sem4",
//   storageBucket: "sdp-vishal-sem4.appspot.com",
//   messagingSenderId: "720287439713",
//   appId: "1:720287439713:web:f6947b217599586b3c8320"
// };

// new one created at 12 june for deploy try `VippyDriveD`
// const firebaseConfig = {
//   apiKey: "AIzaSyA-8IOtSueKdCoN0KDTh0qH59ZQKAADVuM",
//   authDomain: "vippydrived.firebaseapp.com",
//   projectId: "vippydrived",
//   storageBucket: "vippydrived.appspot.com",
//   messagingSenderId: "636476143931",
//   appId: "1:636476143931:web:fadd0d491236ec85e7df1e"
// };


// newp

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDMko2mfvkVLAPhlZDbYqhRQ6Aam0MA-ts",
//   authDomain: "newp-9ccb0.firebaseapp.com",
//   projectId: "newp-9ccb0",
//   storageBucket: "newp-9ccb0.appspot.com",
//   messagingSenderId: "229110225095",
//   appId: "1:229110225095:web:f0e894a2f79372edb946e2",
//   measurementId: "G-R9S9HXMZM1"
// };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const storage=firebase.storage();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{db,storage,auth,provider};