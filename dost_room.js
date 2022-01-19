
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo-UGuK5rZfQSWmwqZQ9lSc41_KWFkm1k",
    authDomain: "kwitter-c8da3.firebaseapp.com",
    databaseURL: "https://kwitter-c8da3-default-rtdb.firebaseio.com",
    projectId: "kwitter-c8da3",
    storageBucket: "kwitter-c8da3.appspot.com",
    messagingSenderId: "489227904564",
    appId: "1:489227904564:web:dc7b7a30b0d88fc0e50c61",
    measurementId: "G-QKE0K0F9GL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom() 
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

      localStorage.setItem("room_name", room_name);

      window. location = "kwitter_page.html";
}  




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
  window.location = "kwitter.html";
}