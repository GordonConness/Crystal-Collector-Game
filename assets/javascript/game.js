$(document).ready(function(){
    var Random=Math.floor(Math.random()*100)

    var userScore = 0; 
    var wins = 0;
    var losses = 0;
  

$('#randomNumber').text(Random);
   
  
    var number1 = Math.floor(Math.random()*10)
    var number2 = Math.floor(Math.random()*10)
    var number3 = Math.floor(Math.random()*10)
    var number4 = Math.floor(Math.random()*10)
  

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  function reset(){
        Random=Math.floor(Math.random()*100);
        console.log(Random)
        $('#randomNumber').text(Random);
        number1 = Math.floor(Math.random()*10);
        number2 = Math.floor(Math.random()*10);
        number3 = Math.floor(Math.random()*10);
        number4 = Math.floor(Math.random()*10);
        userScore = 0;
        $('#finalScore').text(userTotal);
        } 

  function Winner(){
  alert("Winner Winner Chicken Dinner!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  
  function Loser(){
  alert ("Looooser!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
 
    $('#first').on('click', function(){
      userScore = userScore + number1;
      console.log("New userScore= " + userScore);
      $('#finalScore').text(userScore); 
           
          if (userScore == Random){
            Winner();
          }
          else if ( userScore > Random){
            Loser();
          }   
    })  
    $('#second').on('click', function(){
      userScore = userScore + number2;
      console.log("New userScore= " + userScore);
      $('#finalScore').text(userScore); 
          if (userScore == Random){
            Winner();
          }
          else if ( userScore > Random){
            Loser();
          } 
    })  
    $('#third').on('click', function(){
      userScore = userScore + number3;
      console.log("New userScore= " + userScore);
      $('#finalScore').text(userScore);
 
            if (userScore == Random){
            Winner();
          }
          else if ( userScore > Random){
            Loser();
          } 
    })  
    $('#fourth').on('click', function(){
      userScore = userScore + number4;
      console.log("New userScore= " + userScore);
      $('#finalScore').text(userScore); 
        
            if (userScore == Random){
            Winner();
          }
          else if ( userScore > Random){
            Loser();
          }
    });   
  }); 