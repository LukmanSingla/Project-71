import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDsx0-4I2WHGqZLVfVR03EUjyQcMX-8SWc",
  authDomain: "project-71-11090.firebaseapp.com",
  projectId: "project-71-11090",
  storageBucket: "project-71-11090.appspot.com",
  messagingSenderId: "213193561293",
  appId: "1:213193561293:web:c5a4a1c74f4c64f231c584"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

