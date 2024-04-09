const firebaseConfig = {
    apiKey: "AIzaSyCJpnGBoK0i7uqKfcCJbtqpfQ-rdvNQHo0",
    authDomain: "letschat-7fbbe.firebaseapp.com",
    databaseURL: "https://letschat-7fbbe-default-rtdb.firebaseio.com",
    projectId: "letschat-7fbbe",
    storageBucket: "letschat-7fbbe.appspot.com",
    messagingSenderId: "1029042232016",
    appId: "1:1029042232016:web:c4623a6e2101a96bf09cd5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
 username = document.getElementById("user_name").value
 localStorage.setItem("username", username)
 window.location ="letschat_room.html" 
}