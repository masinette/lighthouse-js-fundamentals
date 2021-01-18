// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
//   ['Great Lakes', 10, 'school'],

// ];


// function chooseStations(stations){

//   const goodStations = [];

//   for (let station of stations){
//     const capacity = station[1];

//     if (capacity >= 20){
//       const type = station[2];

//       if (type === 'school' || type === 'community centre'){
//         goodStations.push(station[0]);
//       }
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));



// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre'],
//   ['Great Lakes', 10, 'school']

// ];


// function chooseStations(stations){

//   const goodStations = [];

//   for (const station of stations){
//     const capacity = station[1];

//     if (capacity >= 20){
//       const type = station[2];

//       if (type === 'school' || type === 'community centre'){
//         goodStations.push(station[0]);
//       }
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// function finalPosition(moves) {

// var x = 0;
// var y = 0;
// var coordinates = [];

//   for (move of moves){
//     if(move === 'north'){
//       y = y + 1;
//     }
//     if(move === 'east'){
//       x = x + 1;
//     }
//     if(move=== 'south'){
//       y = y - 1;
//     }
//     if(move === 'west'){
//       x = x - 1;
//     }
        
//     coordinates = [x,y]

//   }
//   return coordinates

//   // return "[" + x + "," + y +"]";
// }

// finalPosition(moves);

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------



// function ageCalculator(name, yearOfBirth, currentYear){

// var age = currentYear - yearOfBirth;

//   return name + " is " + age + " years old."
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));
// console.log(ageCalculator("Suzie", 1983, 2015));

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// function howManyHundreds (num){
 

//   var result = num / 100;
//   var hundreds = Math.floor(result);

//   return hundreds;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

function calculateRectangleArea(length, width){
  if ((length > 0) && (width > 0)){
  var area = length * width;
  }
  return area;
}

function calculateTriangleArea(base, height){
  if ((base > 0) && (height > 0)){
  var area = (base * height) / 2;
  }
  return area;
}

function calculateCircleArea(radius){
  if (radius > 0){
  var area = Math.PI * (radius * radius);
  }
  return area;
}



console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined