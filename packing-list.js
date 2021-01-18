// const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

// console.log("Kitchen stuff to pack:");
// for (let i = 0; i < packingList.length; i++) {
//   console.log(packingList[i]);
// }


// console.log("Kitchen stuff to pack:");
// let i = 0;
// while (i < packingList.length) {
//   console.log(packingList[i]);
//   i++;
// }


// function range(start, end, step){
//   var num = [];
//   for(var i = start; i <= end; i += step){
    
//     console.log(i);
//   }
// }

// The function should return an empty array [] if given incorrect parameters, such as:

//     start, end, or step being undefined
//     start being greater than end
//     step being 0, or negative


// function range(start, end, step){
//   var num = [];

//   if (step <= 0 || start > end || start == undefined || end == undefined || step == undefined){
//     return num;
//   }
//   for(var i = start; i <= end; i += step){
//     num.push(i);
//   }
//   return num;
// }

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));
// console.log(range(30, 10, 1));



// function lastIndexOf (myArrays, value){

//   var instance = 0;

//   for (var i = myArrays.length; i >= 0; i--){
//     if (value === myArrays[i]){
//       instance = myArrays[i];
//       return i;
//     }
//     if (myArrays === undefined || value === undefined){
//       instance = 0;
//       return instance;
//     }
//   }
// }
 


//////////////////////////////////

function lastIndexOf (myArrays, value){

  for (var i = myArrays.length; i >= 0; i--){

    var instance = 0;

    if (myArrays === undefined || value === undefined || i <= 0){
      instance = -1;
      return instance;
    }

    if (value === myArrays[i]){
      instance = myArrays[i];
      return i;
    }
   
  }
} 

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

//////////////////////////////////////////////////////

function concat (firstArray, secondArray){

var combinedArray = [];


  for ( var i = 0; i < firstArray.length; i++){

    if(firstArray === undefined){
      firstArray = [];
    }

    combinedArray.push(firstArray[i]);

    


  }
  for ( var i = 0; i < secondArray.length; i++){
    combinedArray.push(secondArray[i]);
  }

  return combinedArray;
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);



