const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}
//-------------------------------------------------------///////
console.log("Now you're ready to go outside!");

const temperature = 25;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
// -----------------------------------------------/////--------
console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// -------------------------------------------------------
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
// -------------------------------------------------------
if (!raining) {
  console.log("Leave your umbrella at home!");
}
// --------------------------------------------------------


// when using comparison operators versus assignment operators, keep an eye out
// comparison operator syntax is very important greater than, less than, 
//or not operators must come before the equals operators or the code will not run correctly
//write out the code the long way first, then make code DRY after fully understanding the logic