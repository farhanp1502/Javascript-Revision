// Write a function that takes an array of numbers as input and returns a new array with only the positive numbers from the original array.
// let array = [23,-4,5,+3,54]
// let positive = array.filter((x)=>{
//   return x > 0;
// })
// console.log(positive);


// Given an array of strings, write a function to find the shortest string in the array.
// let array = ["apple","ball","cat"];
// let fun = (a,b)=>{
//   if(a.length > b.length)
//   return b
//   }
//   let arr = array.reduce(fun);
//   console.log(arr);



// Write a function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays.
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// // Output: [3, 4, 5]
// function present(array1,array2){
// let common = array1.filter(x=>array2.includes(x));
//   return common;
// }
// console.log(present(array1,array2));


// Given an array of numbers, write a function to calculate the product of all the numbers in the array.
// const numbers = [2, 3, 4, 5];
//  // Output: 120
//  let product = numbers.reduce((a,b)=>{
//   return a*b;
//  })
//  console.log(product);


// Write a function that takes an array of strings as input and returns a new array with the strings reversed.
// const strings = ['Hello', 'World', 'JavaScript'];
//  // Output: ["olleH", "dlroW", "tpircSavaJ"]
//  let reversed = strings.map((x)=>{
//   return x.split("").reverse().join("")
 
//  })
//  console.log(reversed)


// Given an array of objects, where each object has a "quantity" property, write a function that calculates the total quantity of all the objects in the array.

// let arr = [
//   {quantity:100},
//   {quantity:200},
//   {quantity:300}
// ]
// // Output: 600
// let result = arr.reduce((a,b)=>{
 
//   return a + b.quantity;
// },0)
// console.log(result);

// Write a function that takes an array of strings as input and returns the most common string(s) in the array. If there are multiple strings with the same highest frequency, return an array containing all of them.

// function findMostCommonStrings(strings) {
//   const frequencyMap = {};
  
//   // Count the frequency of each string
//   strings.forEach(string => {
//     if (frequencyMap[string]) {
//       frequencyMap[string]++;
//     } else {
//       frequencyMap[string] = 1;
//     }
//   });
  
//   // Find the highest frequency
//   let maxFrequency = 0;
//   for (const string in frequencyMap) {
//     if (frequencyMap[string] > maxFrequency) {
//       maxFrequency = frequencyMap[string];
//     }
//   }
  
//   // Find the strings with the highest frequency
//   const mostCommonStrings = [];
//   for (const string in frequencyMap) {
//     if (frequencyMap[string] === maxFrequency) {
//       mostCommonStrings.push(string);
//     }
//   }
  
//   return mostCommonStrings;
// }

// // Example usage:
// const strings = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];
// const mostCommon = findMostCommonStrings(strings);
// console.log(mostCommon); // Output: ["apple"]



// Given an array of numbers, write a function to find the second smallest and second largest numbers in the array.
// let numbers = [10, 5, 7, 3, 8];
// function fun(numbers){
//   let arr = numbers.sort((a,b)=>a-b);
//   return [arr[1], arr[numbers.length - 2]];
// }
// console.log(fun(numbers))



// Write a function that takes an array of strings as input and returns a new array with only the unique strings, removing any duplicates.
// let arr = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];
// function unq(arr){
//   let arr2 = new Set(arr);
//   return arr2;
// }
// console.log(unq(arr));



//Given an array of numbers, write a function to check if the array is sorted in non-decreasing order. The function should return true if the array is sorted, and false otherwise.
// const numbers1 = [1, 2, 3, 4, 5];
// // console.log(isSorted(numbers1)); // Output: true

// const numbers2 = [1, 3, 2, 4, 5];
// // console.log(isSorted(numbers2)); // Output: false

// function sorted(x){
 
//   let x1 = [...x].sort();
// return JSON.stringify(x1) === JSON.stringify(x);

// }
// console.log(sorted(numbers2))
// console.log(sorted(numbers1))



