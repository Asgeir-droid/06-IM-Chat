// HER LEGGER DU INN INFOEN DIN FRÅ FIREBASE

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhjintWJEzidXItpGBnWufPagRMBKzOu4",
    authDomain: "im-chat-a732e.firebaseapp.com",
    projectId: "im-chat-a732e",
    storageBucket: "im-chat-a732e.appspot.com",
    messagingSenderId: "488917287008",
    appId: "1:488917287008:web:a90f1eb6ced3fabc254305"
});
///////////////////////////////////////////////////////////

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); 

// Henter info frå input-feltet name, og oppretter bruker i collection "users" 
function createUser() {
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value;
    //const name = document.getElementById("name").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    firebase.firestore().collection("users").doc().set({
            email: email,
            //name: name
        })

        .then(function () {
           console.log("bruker opprettet");
        })
    .catch((e) => {
        alert(e.message)
        console.log(e.code); 
        console.log(e.message);
    });
    
}