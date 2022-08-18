
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyChQfnBjurd3JafPGidEvFpXJdeynOmr7U",
  authDomain: "anish-f387e.firebaseapp.com",
  databaseURL: "https://anish-f387e-default-rtdb.firebaseio.com",
  projectId: "anish-f387e",
  storageBucket: "anish-f387e.appspot.com",
  messagingSenderId: "227079250133",
  appId: "1:227079250133:web:bdb2ae96a608ad0b42825c"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


