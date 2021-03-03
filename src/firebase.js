import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBxs7TTKta4lwy34WiwgwHwcGogWTUjqf0",
    authDomain: "slack-clone-edb7b.firebaseapp.com",
    projectId: "slack-clone-edb7b",
    storageBucket: "slack-clone-edb7b.appspot.com",
    messagingSenderId: "55907820703",
    appId: "1:55907820703:web:b2ee85ee572bd4670b6eaa",
    measurementId: "G-ZYDW0WZEF7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;
