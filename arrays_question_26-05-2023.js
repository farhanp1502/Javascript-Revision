// Write a function that takes an array of numbers as input and returns the sum of all the elements.

// function fun(){
//   let sum = 0;
// let a = prompt("enter the numbers in an array","0")
// let b = a.split(",")
//  b.map((x)=>sum += +x)

// return alert(sum)
// }
// fun();

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

//Given an array of numbers, write a function to find the maximum and minimum numbers in the array.

// function minmax(){
// let b = prompt("enter the numbers in an array","0")
// let d = b.split(",")
// let arr =[];
// let n = Math.min(...d);
// let m = Math.max(...d);
//  arr = arr.concat(n,m)
// return alert(arr)
// }
// minmax();

//Write a function that takes an array of strings as input and returns a new array with only the strings that have more than 5 characters.

// function five(){
//   let x = prompt("enter the strings","string")
//   x=x.split(",")
//   let f = x.filter((a)=>a.length > 5)
//   return alert(f)
// }
// five();

//Given an array of numbers, write a function to calculate the average of all the numbers in the array.

// function avg(){
//   let x = prompt("enter the numbers","0")
//   x=x.split(",")
//   let sum = 0;
//
//   let y = x.map((a)=>sum += +a);
//   return alert(parseInt(sum/x.length))
// }
// avg();

//Write a function that takes two arrays as input and returns a new array that contains the elements from both arrays, with no duplicates.

// let array1 = [2, 3, 4, 5];
// let array2 = [6, 7, 2, 4, 8, 9];

// function bth(array1, array2) {
//   let x = array1.concat(array2);
//   let y = [...new Set(x)];
//   return alert(y);
// }
// bth(array1, array2);

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

// Given an array of objects, where each object has a "price" property, write a function that calculates the total price of all the objects in the array.
// const obj = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: 30 },
// ];
// function total(obj) {
//   let result = 0;
//   obj.map((x) => {
//     result += +x.price;
//   });

//   return alert(result);
// }
// total(obj);




