// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


// let obj ={
//   name: 'John'
// }
// let arr = ["fr","dfjk"]
// let c=arr.prototype={}
// console.log(arr.__proto__)
// console.log(c);


// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // ?








// Object.prototype.constructor == Object  


// function User(name) {
//   this.name = name;
// }

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// alert( user2.name ); // Pete (worked!)



Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(3000); // s







