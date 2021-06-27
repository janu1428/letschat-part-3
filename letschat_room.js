firebase.initializeApp(firebaseConfig);

   username=localStorage.getItem("name");
   document.getElementById("name1").innerHTML="welcome "+username+"!";

function create_room(){

roomname =document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({purpose:"adding room name"});
localStorage.setItem("room_name",roomname);
window.location="kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("created_room").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick()='redirect(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("created_rooms").innerHTML = row;

      });});}
getData();

function redirect(name){

console.log(name);
localStorage.setItem("roomname",name);
window.location="letschat_page.html";

}

function logout(){

localStorage.removeItem("name");
localStorage.removeItem("room_name");
window.location="letschat.html";

}