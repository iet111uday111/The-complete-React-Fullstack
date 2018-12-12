import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBxa1B1nKyl0Wv5r7kts0-DA-TSa3iqoKE",
    authDomain: "nba-full-2c7f1.firebaseapp.com",
    databaseURL: "https://nba-full-2c7f1.firebaseio.com",
    projectId: "nba-full-2c7f1",
    storageBucket: "nba-full-2c7f1.appspot.com",
    messagingSenderId: "488181241577"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}