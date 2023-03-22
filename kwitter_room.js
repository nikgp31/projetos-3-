const firebaseConfig = {
  apiKey: "AIzaSyBVaVdTCZoZ32gEkmp-6EyMHJyo-bBh2Fg",
  authDomain: "kwitter-b5f1a.firebaseapp.com",
  databaseURL: "https://kwitter-b5f1a-default-rtdb.firebaseio.com",
  projectId: "kwitter-b5f1a",
  storageBucket: "kwitter-b5f1a.appspot.com",
  messagingSenderId: "400277243540",
  appId: "1:400277243540:web:7de6df7f12daa90e749681"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
