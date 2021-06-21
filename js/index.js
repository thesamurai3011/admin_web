firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if(user.email == "admin@gmail.com") {
      location.replace("main.html");
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
        // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        console.log("Giá trị email" + email_id);
        // alert(email_id);
      }
    }
    else{
      // alert("Please sign in with admin account!");
      // location.reload();
    }
  } else{
    // No user is signed in.SS
    
    // location.reload();
    // location.replace(index.html);
  }

});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  // if(userEmail == "admin@gmail.com"){
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  // }
  
}


