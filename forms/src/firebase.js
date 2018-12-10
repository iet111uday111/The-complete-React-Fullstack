import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAwfM1nJbiU7a7WA_unNrANBBEh0EhjAHs",
    authDomain: "react-forms-e19c1.firebaseapp.com",
    databaseURL: "https://react-forms-e19c1.firebaseio.com",
    projectId: "react-forms-e19c1",
    storageBucket: "react-forms-e19c1.appspot.com",
    messagingSenderId: "808650809020"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
// const googleAuth = new firebase.auth.GoogleAuthProvider();

// export {
//     firebase,
//     firebaseDB,
//     googleAuth
// }

firebaseDB.ref().on('child_added',(snapshot)=> {
    console.log(snapshot.key,snapshot.val());
})