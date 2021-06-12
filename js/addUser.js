var text1 = document.getElementById("email");
// var text2 = document.getElementById("password");
//default password = admin
var text2 = "admin";
var text3 = document.getElementById("phone");
var text4 = document.getElementById("address");
var text5 = document.getElementById("pin");
var text6 = document.getElementById("id");
var submitBtn = document.getElementById("addBtn");
var component;

function add(){
    var ref = firebase.database().ref().child("User");
    ref.orderByChild("email").equalTo(text1.value).once("value", snapshot => {
        if(snapshot.exists()){
            alert("Exist email!!!");
        }
        else{
            var newUser = ref.push();
            newUser.set({
                email: text1.value,
                password: text2,
                phone: text3.value,
                address: text4.value,
                pin: text5.value,
                id: text6.value,
            });
            component = newUser.key;
            
            
            //Thêm component
            firebase.database().ref('Component/' + component).set({
               Sensor: {
                   0: {
                       deviceID: "sensor_1",
                       mode: 2,
                       name: "sensor_1",
                       position: 0,
                   },
                   1: {
                       deviceID: "sensor_2",
                       mode: 2,
                       name: "sensor_2",
                       position: 1,
                   },
               },
               Servo: {
                   0: {
                       deviceID: "servo_1",
                       name: "Cua chinh",
                       state: false,
                   },
               },
               Speaker: {
                   0: {
                       deviceID: "speaker_1",
                       name: "Loa chong trom",
                       volume: 51,
                   },
               },
            });
            alert("Add user: " + text1.value);
        }
    });
    
}




function cancel(){
    location.replace("main.html");
}