$(document).ready(function () {


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0yvYEfgwdYNCngkx0cIf-2PaTiPD3d6E",
    authDomain: "hilttool-9c200.firebaseapp.com",
    databaseURL: "https://hilttool-9c200.firebaseio.com",
    projectId: "hilttool-9c200",
    storageBucket: "hilttool-9c200.appspot.com",
    messagingSenderId: "468011554717"
  };

  firebase.initializeApp(config);

  // next need to create variable that are referencing the DB

    var database = firebase.database();
    //not sure if I need below but reviewed it from classroom work from last week and the following appear to be needed before declaring variables
    var connectionsRef = database.ref("/connections");
    var connectedRef = database.ref(".info/connected");
    connectedRef.on("value", function(snap) 
    
    {
        if (snap.val()) 
        {
            var con = connectionsRef.push(true);
            con.onDisconnect().remove();
        }
    });
        connectionsRef.on("value", function(snap) 
    {
        $("#connected-viewers").text(snap.numChildren());
    });
//the above makes a connection to the DB, got it, but shouldn;t I need to figure out two connections if two people are playing haven't seen that in class work yet so maybe not
//define the variables for left side opponent using and array to create a player object
    var LeftPlayer = {
        PlayerName1: '0',
        PlayerChoice1: '',
        wins1: 0,
        losses1: 0,
        PlayerSmack1: ''
    };
//define the variables for right side opponent using an array to create a player object   
    var RightPlayer = {
        PlayerName2: '0',
        PlayerChoice2: '',
        wins2: 0,
        losses2: 0,
        PlayerSmack2: ''
    };

//1. need to set-up the variables in the database by creating a snapshot, so DB can relate to variables

//2. Need to input the error handling statement
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
 
//3. Need an onclick event for capturing Left Player inputs
$("#submit-name1").on("click", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();
  
    // Get inputs
    PlayerName1 = $("#username1").val().trim();

  
    database.ref().push(player1) ;{
  
      playerName1: playerName1
      
    
    };

});




//4. Capture left player values into Firebase 
//5. Need an onclick event for capturing Right Player input
$("#submit-name2").on("click", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();
  
    // Get inputs
    PlayerName1 = $("#username2").val().trim();

  
    database.ref().push(player2);{
  
      playerName2: playerName2
      
    }})
//6. Capture right player values into Firebase
//7. Once value are capture display the players choice to screen
//8. calculate the winner (reference class assignment wk 2/3)
//9. Display the winner
//10. onlcick event to capture player chatter
//11. capture chatter in frebase
//12. call firebase and append jumbtron text with player smack
//13. need to clear the players
//14. need to reset the score
