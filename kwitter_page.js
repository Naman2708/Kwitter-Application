const firebaseConfig = {
      apiKey: "AIzaSyDF99Tfc5cUWYA99kZMR2vltrtbK2ZDDZw",
      authDomain: "practice-9ae33.firebaseapp.com",
      databaseURL: "https://practice-9ae33-default-rtdb.firebaseio.com",
      projectId: "practice-9ae33",
      storageBucket: "practice-9ae33.appspot.com",
      messagingSenderId: "337948533023",
      appId: "1:337948533023:web:7c032d5f4c0338af4bd02a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function send() 
{ 
      msg = document.getElementById("msg").value; 
firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); 
document.getElementById("msg").value = ""; }
