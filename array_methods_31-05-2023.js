// Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const numbers = [3, -2, 5, -1, 7, -8, 10];
function sumpositive(numbers){
  let sum = 0;
  let a = numbers.map((x)=>{
    if(x > 0){
      sum += x;
    }
  })
  return sum;
}
// console.log(sumpositive(numbers))


//Given an array of strings, write a function to find the longest string in the array.

// function long() {
//   let max = "";
//   let c = prompt("enter the strings in an array", "strings");
//   let d = c.split(",");
//   d.map((x) => {
//     if (x.length > max.length) {
//       max = x;
//     }
//   });
//   return alert(max);
// }
// long();

// Write a function that takes an array of numbers as input and returns a new array with only the even numbers from the original array.

// function even(){
//   let e = prompt("enter the numbers in an array", "numbers");
//  e = e.split(",")

//  let f = e.map((x)=>x%2==0)
// return alert(f)
// }
// even();

// Write a function that takes an array of strings as input and returns a new array with all the strings capitalized.

// function cap(){
//   let x = prompt("enter the strings","string")
//   x=x.split(",")
//   let y = x.map((z)=>z[0].toUpperCase()+z.slice(1));

// return alert(y)
// }
// cap();


//Given an array of objects, where each object has a "name" property, write a function that takes the array as input and returns an array of all the unique names.

// const array = [
//   { name: "John" },
//   { name: "Jane" },
//   { name: "John" },
//   { name: "Alex" },
//   { name: "Jane" }
// ];
// function getUniqueNames(array) {
//   const uniqueNames = [...new Set(array.map(obj => obj.name))];
//   return alert(uniqueNames);
// }
// getUniqueNames(array);

// Write a function that takes an array of numbers as input and returns a new array with the numbers sorted in ascending order.

// function sort(){
//   let x = prompt("enter the numbers","0")
//   x=x.split(",")
//   let y = x.sort();
//   return alert(y);
// }
// sort();

//Write a function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
// function sort(){
//     let x = prompt("enter the strings","string")
//     x=x.split(",")
//     let y = x.sort();
//     return alert(y);
//   }
//   sort();