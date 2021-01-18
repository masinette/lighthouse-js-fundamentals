// var time = 5 + 90 + 90 + 90 + 90 + 100 + 15 + 90 + 60 + 90 + 90 + 180 + 30;
var time = 95+60+30+35+35+180+180+90+240+90+180+120+70;
console.log(time);

var total = time/ 60;
console.log(total);






// Declare an empty string
var sound = "" ; 

// An anonymous function expression stored in the variable `laugh`
var laugh = function(num) {

    //Iterate
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

// It is essential that the function must return a string
console.log(laugh(3)) ;

//-----------------------------------------------
var cry = function cryFace(sound){
  var sound = "boohoo!";
  return sound;
}
console.log(cry());

 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression
 passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here


// An anonymous function expression stored in the variable `laugh`

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions("happy", function(num) {
  var sound = "" ;
  for (var x = 0 ; x < num ; x++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});