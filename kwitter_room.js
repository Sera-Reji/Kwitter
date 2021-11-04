const firebaseConfig = {
      apiKey: "AIzaSyAGmBqb71B21nmoY1faeU5GHsex4-E2bZA",
      authDomain: "kwitter-b4683.firebaseapp.com",
      databaseURL: "https://kwitter-b4683-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4683",
      storageBucket: "kwitter-b4683.appspot.com",
      messagingSenderId: "835929386129",
      appId: "1:835929386129:web:4e2357c2c706269238a330"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
