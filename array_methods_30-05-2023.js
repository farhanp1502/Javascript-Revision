// Given an array of objects representing students, where each object has properties "name" and "age", write a function that takes the array as input and returns an array of student names who are above a certain age threshold.
const students = [
  { name: "John", age: 21 },
  { name: "Sarah", age: 19 },
  { name: "Mike", age: 25 },
  { name: "Emma", age: 20 }
];
//If the age threshold is set to 20, the function should return ["John", "Mike", "Emma"].
function threshold(students){
  let a = students.filter(student=>student.age >= 20)
  return a.map(student=>student.name);
}
// console.log(threshold(students))


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


// Write a function that takes an array of strings as input and returns a new array containing only the strings that are palindromes. A palindrome is a word or phrase that reads the same backward as forward.
const words = ["level", "hello", "madam", "world", "racecar"];
// console.log(findPalindromes(words)); // Output: ["level", "madam", "racecar"]
function findPalindromes(words){
  let newarr = words.filter((word)=>isplaindrome(word))
  return newarr;
}
function isplaindrome(word){
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}



// Write a function that takes an array of numbers as input and returns a new array that contains only the prime numbers from the original array.
const numb = [2,5];
// console.log(findPrimeNumbers(numb)); 
findPrimeNumbers(numb)// Output: [2, 5, 11, 17, 23]
function findPrimeNumbers(numb) {
  return numb.filter(number => isPrime(number));
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    console.log(i)
    
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

