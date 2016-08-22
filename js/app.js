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
  var $displays       = $('li');
  var $bigButton      = $('#bigbutton');
  var $smallButton    = $('#smallbutton');
  var $targetButton   = $('#targetbutton');
  var $targetBox      = $('#targetbox');
  var $topNums        = $('#topnums');
  var $clearButton    = $('#clearbutton');
  var $playClock      = $('playclock');

  var bigNumbers      = [25, 50, 75, 100];
  var smallNumbers    = [1,2,3,4,5,6,7,8,9,10];
  var selectedNumbers = []; 
  var operators       = ["+", "-", "*", "/"];
  var sequence        = [0];
  var total           = 0;
  

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
  
  $targetButton.on('click', function getTarget() {
    for (var i = 0; i < selectedNumbers.length; i++) {
      addToSequence(selectedNumbers[i]);
    }
    console.log(sequence, total)
    $targetBox.html(total);
  });

  $targetButton.on('click', function() {
    $playClock.html("true");
    });


  function addToSequence(nextNumber){
    var valid    = false;
    var oldTotal = total;

    while (!valid) {
      // var randomOperator = operators[Math.floor(Math.random() * operators.length)];
      var randomNumber   = Math.random() * 10;
      var randomOperator;

      if (randomNumber < 10 && randomNumber > 6) {
        randomOperator = "+";
        total += nextNumber;
      } else if (randomNumber <= 6 && randomNumber > 3) {
        randomOperator = "-";
        total -= nextNumber;
      } else if (randomNumber <= 3 && randomNumber > 1) {
        randomOperator = "*";
        total = (total * nextNumber);
      } else if (randomNumber <= 3 && randomNumber >= 0) {
        randomOperator = "/";
        total = (total / nextNumber);
      }


      if (isInt(total) && isPositive(total)) valid = true;
      console.log(oldTotal + " " + randomOperator + " " + nextNumber + " = " + total);
    }

    sequence.push(randomOperator);
    sequence.push(nextNumber);
  }

  function isInt(n) {
    return n % 1 === 0;
  }

  function isPositive(n) {
    return n >= 0;
  }
  
//clear button
$clearButton.click(function(){
  $('.topnums').empty();
});

// var bestdiff;
// var bestvalsums;

// var OPS = {
//   "+": function(n1, n2) { if (n1 < 0 || n2 < 0) return false; return n1+n2; },
//   "-": function(n1, n2) { if (n2 >= n1) return false; return n1-n2; },
//   "_": function(n2, n1) { if (n2 >= n1) return false; return n1-n2; },
//   "*": function(n1, n2) { return n1*n2; },
//   "/": function(n1, n2) { if (n2 == 0 || n1%n2 != 0) return false; return n1/n2; },
//   "?": function(n2, n1) { if (n2 == 0 || n1%n2 != 0) return false; return n1/n2; },
// };

// var OPCOST = {
//   "+": 1,
//   "-": 1.05,
//   "_": 1.05,
//   "*": 1.2,
//   "/": 1.3,
//   "?": 1.3,
// };

// function _recurse_solve_numbers(numbers, searchedi, was_generated, target, levels, valsums, trickshot) {
//   levels--;

//   for (var i = 0; i < numbers.length-1; i++) {
//     var ni = numbers[i];

//     if (ni === false)
//       continue;

//     numbers[i] = false;

//     for (var j = i+1; j < numbers.length; j++) {
//      var nj = numbers[j]
//      if (nj === false)
//        continue
//      if (i < searchedi && !was_generated[i] && !was_generated[j])
//        continue
//      for (var o in OPS) {
//       var r = OPS[o](ni[0], nj[0]);
//       if (r === false)
//         continue;

//       var op_cost = Math.abs(r);
//       while (op_cost % 10 == 0 && op_cost != 0)
//         op_cost /= 10;
//             if ((ni[0] == 10 || nj[0] == 10) && o == '*') // HACK: multiplication by 10 is cheap
//               op_cost = 1;
//             op_cost *= OPCOST[o];

//             var newvalsums = valsums + op_cost;

//             if ((Math.abs(r - target) < Math.abs(bestresult[0] - target))
//               || (Math.abs(r - target) == Math.abs(bestresult[0] - target) && (trickshot || newvalsums < bestvalsums))) {
//               bestresult = [r,o,ni,nj];
//             bestvalsums = newvalsums;
//           }

//           numbers[j] = [r, o, ni, nj];
//           var old_was_gen = was_generated[j];
//           was_generated[j] = true;

//           if (levels > 0 && (trickshot || bestresult[0] != target || newvalsums < bestvalsums))
//             _recurse_solve_numbers(numbers, i+1, was_generated, target, levels, newvalsums, trickshot);

//           was_generated[j] = old_was_gen;
//           numbers[j] = nj;
//         }
//       }

//       numbers[i] = ni;
//     }
//   }

//   nction tidyup_result(result) {
//     var mapping = {
//       "?": "/", "_": "-"
//     };

//     var swappable = {
//       "*": true, "+": true
//     };

//     if (result.length < 4)
//       return result;

//     for (var i = 2; i < result.length; i++) {
//       var child = result[i];

//       child = tidyup_result(child);

//       if (child[1] == result[1] && swappable[result[1]]) {
//         result.splice(i--, 1);
//         result = result.concat(child.slice(2));
//       } else {
//         result[i] = child;
//       }
//     }

//     if (result[1] in mapping) {
//       result[1] = mapping[result[1]];
//       var j = result[2];
//       result[2] = result[3];
//       result[3] = j;
//     } else if (swappable[result[1]]) {
//       childs = result.slice(2).sort(function(a,b) { return b[0] - a[0]; });
//       for (var i = 2; i < result.length; i++)
//         result[i] = childs[i-2];
//     }

//     return result;
//   }

//   nction fullsize(array) {
//     if (array.constructor != Array)
//       return 0;

//     var l = 0;

//     for (var i = 0; i < array.length; i++)
//       l += fullsize(array[i]);

//     return l + array.length;
//   }

//   nction serialise_result(result) {
//     var childparts = [];

//     for (var i = 2; i < result.length; i++) {
//       var child = result[i];

//       if (child.length >= 4)
//         childparts.push(serialise_result(child));
//     }

//     childparts = childparts.sort(function(a,b) { return fullsize(b) - fullsize(a); });

//     var parts = [];
//     for (var i = 0; i < childparts.length; i++) {
//       parts = parts.concat(childparts[i]);
//     }

//     var sliced = result.slice(2).map(function(l) { return l[0]; });
//     var thispart = [result[0], result[1]].concat(sliced);

//     return parts.concat([thispart]);
//   }


// //stringify result
// function stringify_result(serialised, target) {
//   var output = '';

//   serialised = serialised.slice(0);

//   for (var i = 0; i < serialised.length; i++) {
//     var x = serialised[i];

//     var args = x.slice(2);
//     output += args.join(' ' + x[1] + ' ') + ' = ' + x[0] + '\n';
//   }

//   var result = serialised[serialised.length-1][0];
//   if (result != target)
//     output += '(off by ' + (Math.abs(result - target)) + ')\n';

//   return output;
// }


// function solve_numbers(numbers, target, trickshot) {
//   numbers.sort();
//   bestresult = [numbers[0], numbers[0]];

//     /* see if one of these numbers is the answer; with trickshot you'd rather
//      * have an interesting answer that's close than an exact answer
//      */
//      if (!trickshot) {
//       for (var i = 1; i < numbers.length; i++) {
//         if (Math.abs(numbers[i] - target) < Math.abs(bestresult[0] - target)) {
//           bestresult = [numbers[i], numbers[i]];
//           bestvalsums = numbers[i];
//         }
//       }
//       if (bestresult[0] == target)
//         return target + " = " + target;
//     }

//     return stringify_result(serialise_result(tidyup_result(_solve_numbers(numbers, target, trickshot))), target);
  }





