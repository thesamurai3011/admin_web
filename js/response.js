var rootRef = firebase.database().ref().child("Response");
var rootRef2 = firebase.database().ref().child("User");
var app;

var aRef1 = firebase.database().ref("Response/App");
var aRef2 = firebase.database().ref("Response/Maintain");
var aRef3 = firebase.database().ref("Response/Product");

let star1_1 = star1_2 = star1_3 = star1_4 = star1_5 = 0;
var star2_1 = star2_2 = star2_3 = star2_4 = star2_5 = 0;
var star3_1 = star3_2 = star3_3 = star3_4 = star3_5 = 0;

function fetchData(){
    //             var key = ChildSnapshot.key;
    /*Response for App*/

    aRef1.once("value", function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot){
                var email = ChildSnapshot.val().email;
                var text = ChildSnapshot.val().text;
                var score = ChildSnapshot.val().score;
                
                switch(score){
                    case 1:
                        star1_1++;
                        break;
                    case 2:
                        star1_2++;
                        break;
                    case 3:
                        star1_3++;
                        break;
                    case 4:
                        star1_4++;
                        break;
                    case 5:
                        star1_5++;
                        break;
                }
                $("#table_body1").append("<tr><td>" +  email + "</td><td>" + score + "</td><td>" + text + "</td></tr>");
            }
        );
        let myChart = document.getElementById('chart1').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
        
        let massPopChart = new Chart(myChart, {
            type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data:{
            labels:['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
            datasets:[{
                label:'Number',
                data:[
                star1_1,
                star1_2,
                star1_3,
                star1_4,
                star1_5,
                ],
                //backgroundColor:'green',
                backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
            }]
            },
            options:{
                title:{
                    display:true,
                    text:'App Responses',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                    fontColor:'#000'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                layout:{
                    padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                    }
                },
                tooltips:{
                    enabled:true
                }
            }
        });
    });

    aRef2.once("value", function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot){
                var email = ChildSnapshot.val().email;
                var text = ChildSnapshot.val().text;
                var score = ChildSnapshot.val().score;

                switch(score){
                    case 1:
                        star2_1++;
                        break;
                    case 2:
                        star2_2++;
                        break;
                    case 3:
                        star2_3++;
                        break;
                    case 4:
                        star2_4++;
                        break;
                    case 5:
                        star2_5++;
                        break;
                }
                $("#table_body2").append("<tr><td>" +  email + "</td><td>" + score + "</td><td>" + text + "</td></tr>");
            }
        );
        let myChart = document.getElementById('chart2').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
        
        let massPopChart = new Chart(myChart, {
            type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data:{
            labels:['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
            datasets:[{
                label:'Number',
                data:[
                star2_1,
                star2_2,
                star2_3,
                star2_4,
                star2_5,
                ],
                //backgroundColor:'green',
                backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                // 'rgba(255, 159, 64, 0.6)',
                // 'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
            }]
            },
            options:{
                title:{
                    display:true,
                    text:'Maintain Responses',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                    fontColor:'#000'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                layout:{
                    padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                    }
                },
                tooltips:{
                    enabled:true
                }
            }
        });
    });

    aRef3.once("value", function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot){
                var email = ChildSnapshot.val().email;
                var text = ChildSnapshot.val().text;
                var score = ChildSnapshot.val().score;
                
                switch(score){
                    case 1:
                        star3_1++;
                        break;
                    case 2:
                        star3_2++;
                        break;
                    case 3:
                        star3_3++;
                        break;
                    case 4:
                        star3_4++;
                        break;
                    case 5:
                        star3_5++;
                        break;
                }
                $("#table_body3").append("<tr><td>" +  email + "</td><td>" + score + "</td><td>" + text + "</td></tr>");
            }
        );
        let myChart = document.getElementById('chart3').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
        
        let massPopChart = new Chart(myChart, {
            type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data:{
            labels:['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
            datasets:[{
                label:'Number',
                data:[
                star3_1,
                star3_2,
                star3_3,
                star3_4,
                star3_5,
                ],
                //backgroundColor:'green',
                backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                // 'rgba(255, 159, 64, 0.6)',
                // 'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'#000'
            }]
            },
            options:{
                title:{
                    display:true,
                    text:'Product Responses',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                    fontColor:'#000'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                layout:{
                    padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                    }
                },
                tooltips:{
                    enabled:true
                }
            }
        });
    });
}

document.getElementById("returnBtn1").onclick = function(){myfunction()};
document.getElementById("returnBtn2").onclick = function(){myfunction()};
document.getElementById("returnBtn3").onclick = function(){myfunction()};
function myfunction(){
    location.replace("main.html");
}
window.onload(fetchData());

