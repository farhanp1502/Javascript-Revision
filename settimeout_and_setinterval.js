// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 5000);
// }

// // usage:
// printNumbers(5, 10);


// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }