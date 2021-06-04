var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCnp47zl1MqNeELIyOrArtJ708iCLgq9lE",
    authDomain: "smarthome-8926e.firebaseapp.com",
    databaseURL: "https://smarthome-8926e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smarthome-8926e",
    storageBucket: "smarthome-8926e.appspot.com",
    messagingSenderId: "1079969519866",
    appId: "1:1079969519866:web:4b81d5f5289c2c1e2a1143",
    measurementId: "G-EHPHKT9H54"
};
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


