
var rootRef = firebase.database().ref().child("Response");
var rootRef2 = firebase.database().ref().child("User");
var app = {};


// rootRef.on("child_added", snap => {
//     var score = snap.child("score").val();
//     var text = snap.child("text").val();
//     $("#table_body").append("<tr><td>" +  score + "</td><td>" + text + "</td></tr>");

// });

function fetchData(){
    rootRef.once('value', function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                var score = ChildSnapshot.val().score;
                var text = ChildSnapshot.val().text;
                var key = ChildSnapshot.key;
                // alert(key);
                var emailRef = firebase.database().ref('User/' + key + '/email');
                var email = {};
                emailRef.once('value', (snapshot) => {
                    email = snapshot.val();
                    // alert(email);
                    $("#table_body").append("<tr><td>" +  email + "</td><td>" + score + "</td><td>" + text + "</td></tr>");
                });
                
            }
        );
    });
}

document.getElementById("returnBtn").onclick = function(){myfunction()};
function myfunction(){
    location.replace("main.html");
}
window.onload(fetchData());

