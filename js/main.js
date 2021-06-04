function logout(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        location.replace("index.html");
      }).catch((error) => {
        // An error happened.
      });
}

function addUser(){
    location.replace("addUser.html");
}

function checkResponse(){
    location.replace("response.html");
}