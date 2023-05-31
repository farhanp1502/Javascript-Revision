// function sayHiBye(firstName, lastName) {

//   // helper nested function to use below
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   alert( "Hello, " + getFullName() );
//   alert( "Bye, " + getFullName() );

// }
// sayHiBye("farhan","pasha");



// function f() {
//   let value = 123;
//   console.log(value);
// inner()
// function inner(){
//       value=456;
//     console.log(value);
//   }
//   console.log(value);

//   return inner;
// }



//  let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// // of the corresponding f() call
//  g()
 
 
//  let k ={
//   name:"farhan",
//   last:"pasha",
//   fullname:function(){
//     console.log(this.name + " " + this.last)
//   }
//  }
//  let l ={
//   name:"abhi",
//   last:"shek"
//  }
//  k.fullname.call(l)




// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();



// function func() {
// var x=2;
//  return function () {
//   alert(x)
//  }; // ReferenceError: Cannot access 'x' before initialization
//     x = 2;
  
// }
// // func();
// var k = func();
// console.log(k);
// k();
// // console.log(func());
// // console.log(k());

// function getFunc() {
//   let value = "test";

//   let func = new Function(alert(value));

//   return func;
// }

// getFunc()(); // error: value is not defined




