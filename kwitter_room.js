const firebaseConfig = {
      apiKey: "AIzaSyAK3yaUpGoTEA-5jKBSJ0uo0BRTHcmQUkA",
      authDomain: "kwitter-1346b.firebaseapp.com",
      databaseURL: "https://kwitter-1346b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1346b",
      storageBucket: "kwitter-1346b.appspot.com",
      messagingSenderId: "946412248468",
      appId: "1:946412248468:web:39c8ac52df39c697264381"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Boi : "adding room name"
      })
      localStorage.setItem("room name " + room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room name", name);
      window.location = "kwitter_page.html";
}

