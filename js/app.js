// window.onload = function(){ 
//BASIC NUMBER GAME:
//user presses big-buttons to generate big numbers
//user presses small-buttons to generate small numbers
//user presses go-button to generate answer at top of screen
//timer starts for 30 secs
//after 30secs is up dim clock image and display "times up".
//user presses solution button to give up 
//stop clock when solution displays on the left side of page.
//user presses reset to clear everything on page

//-------------------------------------------------------

//FURTHER PSEUDO CODE:
//set out all variables for each all elements like the calculator

//Choice of numbers "1,2,3,4,5,6,7,8,9,10,25,50,75,100" picked from array [0,1,2,3,4,5,6,7,8,9,10,11,12,13].

//user presses big-buttons to generate numbers from array places [10,11,12,13] 
//create buttons with click event listeners to make the buttons display html in div's
//do an eventlistener to pick [i] from array and display this in div element.

//user presses small-buttons to generate small numbers
//get numbers from array places [0-9]

//these numbers will go into new array called top-numbers (max length of array is 6). function topNumbers ()

//user presses go-button to generate answer (which will be displayed in answer-div).
//cannot press go-button without all the six top-numbers being filled.
//calculation of answer using random indexes (the 6 numbers) from top-numbers array.
//


//timer starts for 30 secs when go-button is pressed
//to make image work use 30 images of clock in different positions and run in sequence
//or use video??? ---- https://www.youtube.com/watch?v=M2dhD9zR6hk
//
//after 30secs is up dim clock image and display "times up".



//user presses solution button to give up
//stop clock video when solution displays on the left side of page.

//display solution on the left side of page
//this will be converting calulation into strings of text.
//use index values used by the computer to solve and return these in each step of calulation.

//user presses reset to clear everything on page
//

///////////////////////////////////////////////////////////////////////

  // var bigNum = ["25", "50", "75", "100"];
//   var bigUsed =;
//   var smallUsed = new Array();
//   var TargetNum=0 ;
//   // var MaxNum=5 ;
//   // var CurrCecil=0 ;
//   // var MaxCecil=2 ;
//   // var NumOffSet=3 ;
//   // var CardOffSet=9 ;
//   // var ManEntry=0 ;
//   // var Value=0 ;


// var smallButton = document.getElementById("smallbutton");
// var targetBox = document.getElementById("targetbox");

// var selectedNumbers = [];
// var bigNumbers = [25, 50, 75, 100];

// bigbutton.onclick = function() {
//   var number = bigNumbers[Math.floor(Math.random()*bigNumbers.length)];
//   selectedNumbers.push(number);

//   console.log(selectedNumbers);
// }

// smallButton.onclick = function (){
//   var number = (Math.floor((Math.random() * 10) + 1));
//   selectedNumbers.push(number);

//   console.log(selectedNumbers);
// }


// };

// function fillTargetBox (targetBox, ){
//   targetBox.innerHTML  = player;
//   targetBox.classList += player;
// }


// $(function getSmallNum(){
//     // var smallNum = (document.getElementById("smallbutton").
//     $('#smallbutton').click(function(){
//       console.log ("clicked");
//     });
// })


$(start)

function start() {
  var $displays       = $('td');
  var $bigButton      = $('#bigbutton');
  var $smallButton    = $('#smallbutton');

  var bigNumbers      = [25, 50, 75, 100];
  var smallNumbers    = [1,2,3,4,5,6,7,8,9,10];
  var selectedNumbers = []; 

  if (selectedNumbers.length < 6) {

    $bigButton.on('click', function() {
      var number = bigNumbers[Math.floor(Math.random()*bigNumbers.length)];
      selectedNumbers.push(number);
      $($displays[selectedNumbers.length -1]).html(number)
    });

    $smallButton.on('click', function() {
      var number = smallNumbers[Math.floor(Math.random()*smallNumbers.length)];
      selectedNumbers.push(number);
      $($displays[selectedNumbers.length -1]).html(number)
    });

  }

}







