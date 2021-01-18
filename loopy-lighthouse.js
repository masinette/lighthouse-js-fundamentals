// for(x = 100; x <201; x++){

//   if((x % 3 === 0) && !(x % 5 === 0)){
//     console.log("Loopy");
//   }else if((x % 5 === 0) && !(x % 3 === 0)){
//     console.log("Lighthouse");
//   }else if((x % 3 === 0) && (x % 5 === 0)){
//     console.log("LoopyLighthouse");  
//   }else{
//     console.log(x);
//   }

// }

// for(var x = 100; x <201; x++){
//   if(!(x % 3 === 0) && !(x % 5 === 0)){
//   console.log(x);
//   }else if((x % 3 === 0) && !(x % 5 === 0)){
//     console.log("Loopy");
//   }else if((x % 5 === 0) && !(x % 3 === 0)){
//     console.log("Lighthouse");
//   }else if((x % 3 === 0) && (x % 5 === 0)){
//     console.log("LoopyLighthouse");  
//   }
// }


// for(var x = 100; x < 201; x++){
//   if(!(x % 3 === 0) && !(x % 4 === 0)){
//     console.log(x);
//   }else if((x % 3 === 0) && !(x % 4 === 0)){
//     console.log("Loopy");
//   }else if((x % 4 === 0) && !(x % 3 === 0)){
//     console.log("Lighthouse");
//   }else if((x % 3 === 0) && (x % 4 === 0)){
//     console.log("LoopyLighthouse");  
//   }
// }

let data = ['corn', 'amaranth', 'rye', 'sprouted','wheat'];
for (val of data){
  console.log(val);
}

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
for (identifier of person){
  console.log(identifier);
}