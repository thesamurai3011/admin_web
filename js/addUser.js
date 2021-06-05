var text1 = document.getElementById("email");
var text2 = document.getElementById("password");
var text3 = document.getElementById("phone");
var text4 = document.getElementById("address");
var text5 = document.getElementById("pin");
var text6 = document.getElementById("id");
var submitBtn = document.getElementById("addBtn");


function add(){
    var ref = firebase.database().ref().child("User");
    ref.orderByChild("email").equalTo(text1.value).once("value", snapshot => {
        if(snapshot.exists()){
            alert("exists email");
        }
        else{
            var newUser = ref.push();
            newUser.set({
                email: text1.value,
                password: text2.value,
                phone: text3.value,
                address: text4.value,
                pin: text5.value,
                id: text6.value,
            });
            alert("Add user: " + text1.value);
        }
    });
}

function cancel(){
    location.replace("main.html");
}