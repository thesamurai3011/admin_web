
var rootRef = firebase.database().ref().child("Response");
var rootRef2 = firebase.database().ref().child("User");
var app;

var aRef1 = firebase.database().ref("Response/App");

function fetchData(){
    // rootRef.once('value', function(snapshot){
    //     snapshot.forEach(
    //         function(ChildSnapshot){
    //             var score = ChildSnapshot.val().score;
    //             var text = ChildSnapshot.val().text;
    //             var key = ChildSnapshot.key;
    //             // alert(key);
    //             var emailRef = firebase.database().ref('User/' + key + '/email');
    //             var email = {};
    //             emailRef.once('value', (snapshot) => {
    //                 email = snapshot.val();
    //                 // alert(email);
    //                 $("#table_body").append("<tr><td>" +  email + "</td><td>" + score + "</td><td>" + text + "</td></tr>");
    //             });
                
    //         }
    //     );
    // });
    
    /*Response for App*/

    aRef1.once("value", function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot){
                var email = ChildSnapshot.val().email;
                var text = ChildSnapshot.val().text;
                var score = ChildSnapshot.val().score;
                $("#table_body").append("<tr><td>" +  email + "</td><td>" + score + "</td><td>" + text + "</td></tr>");
            }
        );
    });

}

document.getElementById("returnBtn").onclick = function(){myfunction()};
function myfunction(){
    location.replace("main.html");
}
window.onload(fetchData());

