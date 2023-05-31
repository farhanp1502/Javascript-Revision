//     let user = {};

// user.__num__=2;
// console.log(user.__num__);

// let obj = {};
// user.__proto__ = 5;
// console.log(user.__proto__);

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {

//   alert(`${key} : ${user[key]}` );

// }
// let ac = {};

// let user = {};
// user.name = "john";

// console.log(user);

// user.surname = "smith";
// console.log(user);
// user.name = "pete";
// console.log(user);
// delete user.name;
// console.log(user);

// function isEmpty(n) {
//   for (let a in n) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(user));
// console.log(isEmpty(ac));



//       let salaries = {
//         john : 100,
//         Ann: 160,
//         Pete: 130
//       }
//       function sumsalaries(){
//         let sum=0;
//         for (let k in salaries){
// sum = sum+salaries[k];
//         }
//         return sum;
//       }
//       console.log(sumsalaries())


// let menu = {
//   width : 200,
//   heigth: 300,
//   title : "my menu"
// }

// function mul(){
//   for(let k in menu){
//     if(typeof(menu[k]) == 'number')
//     menu[k] = menu[k]*2;

//   }
//   return menu;
// }
// console.log(mul())

// const a = "farhan";
// a = "pasha";
// console.log(a);


// const user = {
//   name: "John"
// };

// user.name = "Pete"; 

// alert(user.name);


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone ={
//   age:20
// }
// Object.assign(clone,user);
// Object.assign(user,clone);
// // clone.__proto__=user;


// console.log(clone.name)
//  console.log(clone)
//  console.log(user)


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // Error: Cannot read property 'name' of undefined



//let  calucator = {

//    read(){
//     this.a = prompt("enter the value of a");
//   this.b = prompt("enter the value of b");
//   },
// sum(){
//   return +this.a + +this.b;
//   },
// mul(){
//   return this.a * this.b;
// }
// };
// calucator.read();
// alert(calucator.sum());
// alert(calucator.mul())


// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;

//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//     return this;

//   }
// };
// // using of this can reduce the code of lines to write it with return ;

// ladder.up().down().up().showStep();

// let c = {};
// function a(){
//  return c;
// }
// function b(){
//  return c;
// }
// let A = new a();
// let B = new b();
// alert (A == B);

// let obj = {};

// function d() { return obj; }
// function e() { return obj; }

// alert( new d() == new e() ); // true

// function calc(){

//   this. read=()=>{
//     this.a = prompt("enter the value of a");
//   this.b = prompt("enter the value of b");
//   }
// this.sum=()=>{
//   return +this.a + +this.b;
//   }
// this.mul=()=>{
//   return this.a * this.b;
// }
// }
// let c = new calc();
// c.read();
// alert(c.sum());
// alert(c.mul());





// function accumalator(value){
//   this.value = value;


// this.read=()=>{

//  this.value += +prompt("enter a number");

// }
// this.result=()=>{
//   return this.value;
// }
// }
// let acc = new accumalator(1);
// acc.read();
// acc.read();
// alert(acc.result())


// let user = { // belongs to another code
//   name: "John"
// };

// let id = Symbol("id");
// user[id] = 1;
// user.id= 2;


// console.log( user); 



// let id = Symbol("a");

// let user = {
//   name: "John",
//   [id]: 123 // not "id": 123
// };

// console.log(user)


// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };
// alert()
// for (let key in user) alert(key); // name, age (no symbols)

// // the direct access by the symbol works
// // alert( "Direct: " + user[id] ); // 


// let obj= {
//   n:"2"
// //   toString(){
// // return "2";
//   }

// console.log(obj)
// console.log(typeof(obj.n))
// alert(obj.n + 2)



// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function sumSalaries(obj)
// {
//   let sum = 0;
//   for(let value of Object.values(obj)){
//     sum += value;
//   }
//   return sum;
// }

// console.log( sumSalaries(salaries) );




// let user = {
//   name: 'John',
//   age: 30
// };
// function count(obj){

// return Object.keys(obj).length;
// }
// alert( count(user) ); // 2



// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "farz": 20
// };

// function topSalary(salaries){
//   let top = 0;
//   let Name = null;
//   for(let [name , value] of Object.entries(salaries)){
//     if(value > top){
//       top = value;
// Name = name;
//   }
//   else if(value == " "){
//     return null
//   }

// }
// return Name;
// }
// alert(topSalary(salaries))



let user = {
name: "John",
years: 30
};

let { name , years: age , isAdmin = false } = user;

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false