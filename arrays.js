// let styles = ["jazz","blues",]
      // styles.push("rock-n-roll")
      // styles[Math.floor((styles.length-1)/2)]="classic";
      // styles.shift("jazz")
      // styles.unshift("rap","reggae")
      // alert(styles)

      // let arr = ["a", "b"];

      // arr.push(function() {
      //   return (this)
      // });
      // alert(arr)

      // alert(arr[0]+","+arr[1]+","+arr);






      // function suminput() {
      //   let arr = [];
      //   while (true){
      //     let input = prompt("Enter a number");
      //     if(input === "" || input === null || !isFinite(input) )
      //     break;
      //     arr.push(+input);
      //   }
      //     let sum = 0;
      //     for(let i of arr){
      //       sum += i;
      //     }
      //   return sum;
      // }
      // alert(suminput());




// function get(arr){
//   let maxsum=0;
//   for(let i=0;i<arr.length;i++){
//     let sumstart=0;
//     for(let j=i+1;j<arr.length;j++){
//       sumstart+=arr[j];
//       maxsum= Math.max(maxsum,sumstart);

//   }
// }
// return maxsum;
// }

// alert( get([-1, 2, 3, -9]) ); // 5
// alert( get([-1, 2, 3, -9, 11]) ); // 11
// alert( get([-2, -1, 1, 2]) ); // 3




// let arr = ["javascript","java","python","c++"]
// let arr2=arr.filter(x=>x.includes("p"));
// console.log(arr2)
// console.log(typeof(arr2))

// let obj={name:2}
// console.log(obj)

// let map= new Map();
// map.set("obj1","hello");
// console.log(map);



      // let language = arr.filter((item) => {
    // if(item.includes("p") )
    // {
    //   let arr2=[];
    //   arr2.push(item);
    //   return arr2;
    // }
     
    // })
    // alert(language)




// function camelize(str){
  
//   let a= str.split("");
//   for(let k in a){

// if(a[k].includes("-")){
//   delete a[k];
//   k++;
//   a[k]=a[k].toUpperCase();
// }

  
//     }
//     return a.join("")
    
//   }
// alert(camelize("back-ground-color"));

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// // alert( filtered ); // 3,1 (matching values)

// // alert( arr ); 

// function filterRange(array,max,min){
// console.log(array,max,min)
// let a=[];
// for(let k of array){
 
//   if(max <= array[k] || array[k] <= min)
//   {
//     a.push(array[k])
//   }
  
// }
// return console.log(a);
// }

// let arr=["apple","ball","cat"]
// for(let k of arr){
//   let b = arr[k].replace(arr[0],arr[0].toUpperCase())
//   console.log(b)
// }
// let a ="ball"
// let b=a.replace(a[0],a[0].toUpperCase())
// console.log(b);



// let arr = [5, 2, 1, -10, 8];
// let arr2 = arr.sort().reverse();
// // ... your code to sort it in decreasing order

// alert( arr2 )



// function copySorted(){
//   return arr.slice().sort();
    
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr );


function calculator(){

  this.method={
   "-":(a,b)=>a-b,
   "+":(a,b)=>a+b
  };
  this.calculate = function(str){
   let arr = str.split(" "),
   a=+arr[0],
   op=arr[1],
   b=+arr[2];
   if(!this.method[op] || isNaN(a) || isNaN(b))
   {
     return "Invalid Input";
   }
   return this.method[op](a,b);
  };
 this.addmethod = function(name,func){
   this.method[name]=func;
 };
 }
 let cal = new calculator();
 alert(cal.calculate("3 + 7")) // 10
 let powerCalc = new calculator;
 powerCalc.addmethod("*", (a, b) => a * b);
 powerCalc.addmethod("/", (a, b) => a / b);
 powerCalc.addmethod("**", (a, b) => a ** b);
 
 let result = powerCalc.calculate("2 ** 3");
 alert( result ); // 8
 
 let result1 = powerCalc.calculate("4 + 3");
 alert( result1 ); // 7unction calculator(){
 
 //  this.method={
 //   "-":(a,b)=>a-b,
 //   "+":(a,b)=>a+b
 //  };
 //  this.calculate = function(str){
 //   let arr = str.split(" "),
 //   a=+arr[0],
 //   op=arr[1],
 //   b=+arr[2];
 //   if(!this.method[op] || isNaN(a) || isNaN(b))
 //   {
 //     return "Invalid Input";
 //   }
 //   return this.method[op](a,b);
 //  };
 // this.addmethod = function(name,func){
 //   this.method[name]=func;
 // };
 // }
 // let cal = new calculator();
 // alert(cal.calculate("3 + 7")) // 10
 // let powerCalc = new calculator;
 // powerCalc.addmethod("*", (a, b) => a * b);
 // powerCalc.addmethod("/", (a, b) => a / b);
 // powerCalc.addmethod("**", (a, b) => a ** b);
 
 // let result = powerCalc.calculate("2 ** 3");
 // alert( result ); // 8
 
 // let result1 = powerCalc.calculate("4 + 3");
 // alert( result1 ); // 7
 
 
 // let john = { name: "John", age: 25 };
 // let pete = { name: "Pete", age: 30 };
 // let mary = { name: "Mary", age: 28 };
 // let users = [ john, pete, mary ];
 // let names = users.map((item)=>item.name)
 // console.log( names ); // John, Pete, Mary
 
 
 // let john = { name: "John", surname: "Smith", id: 1 };
 // let pete = { name: "Pete", surname: "Hunt", id: 2 };
 // let mary = { name: "Mary", surname: "Key", id: 3 };
 
 // let users = [ john, pete, mary ];
 
 // let usersMapped = users.map( abc=(item,index,array) => {fullname=item.name+" "+item.surname,id=item.id;
 
 // return {fullname,id}
 // })
 // ;
 // console.log(usersMapped)
 // /*
 // usersMapped = [
 //   { fullName: "John Smith", id: 1 },
 //   { fullName: "Pete Hunt", id: 2 },
 //   { fullName: "Mary Key", id: 3 }
 // ]
 // */
 
 
 // alert( usersMapped[0].id ) // 1
 // alert( usersMapped[0].fullname ) // John Smith
 
 
 
 
 // let john = { name: "John", age: 25 };
 // let pete = { name: "Pete", age: 30 };
 // let mary = { name: "Mary", age: 28 };
 
 // let arr = [ pete, john, mary ];
 // // console.log(arr)
 // function sortByAge(array){
 //   return array.sort((a,b) => a.age - b.age)
 // } 
 // console.log(sortByAge(arr));
 
 // // now: [john, mary, pete]
 // alert(arr[0].name); // John
 // alert(arr[1].name); // Mary
 // alert(arr[2].name); // Pete
 
 
 
 
 // let arr = [1, 2, 3];
 // function shuffle(array) {
 //   array.sort(() => Math.random() - 0.5);
 // }
 
 
 // shuffle(arr);
 // alert(arr)
 // // arr = [3, 2, 1]
 
 // shuffle(arr);
 // alert(arr)
 
 // // arr = [2, 1, 3]
 
 // shuffle(arr);
 // alert(arr)
 
 // // arr = [3, 1, 2]
 // // ...
 
 
 // let john = { name: "John", age: 25 };
 // let pete = { name: "Pete", age: 30 };
 // let mary = { name: "Mary", age: 29 };
 
 // let arr = [ john, pete, mary ];
 
 // alert( getAverageAge() ); // (25 + 30 + 29) / 3 = 28
 // function getAverageAge()
 // {
 //   let sum = 0;
 //   let b = arr.map(item=>item.age
 //   )
 //   for(let k in b){
 //     sum += b[k];
 //   }
 //   let avg = sum/b.length;
 //   return avg;
 // }
 // getAverageAge();
 
 
 // let john = { name: "John", age: 25 };
 // let pete = { name: "Pete", age: 30 };
 // let mary = { name: "Mary", age: 29 };
 
 // let arr = [ john, pete, mary ];
 
 // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 // function getAverageAge(users)
 // {
 //   return users.reduce((prev,user)=>prev +  user.age,0)/users.length;
 // }
 
 // let str = "farhan pasha"
 // let arr2 = str.split("");
 // alert(unique(arr2))
 // function unique(arr) {
 //  return arr.filter((item, index) => arr.indexOf(item) === index);
 // }
 
 // let strings = ["Hare", "Krishna", "Hare", "Krishna",
 //   "Krishna", "Krishna", "Hare", "Hare", ":-O"
 // ];
 
 // alert( unique(strings) ); // Hare, Krishna, :-O
 
 
 
 // let users = [
 //   {id: 'john', name: "John Smith", age: 20},
 //   {id: 'ann', name: "Ann Smith", age: 24},
 //   {id: 'pete', name: "Pete Peterson", age: 31},
 // ];
 
 // let usersById = groupById(users);
 // console.log(usersById);
 // // function groupById(arr){
 // // let arr2 = arr.map((item)=>`${item.id}`)
 // // console.log(arr2)
 
 // // }
 // function groupById(array){
 //   return array.reduce((obj, value) => {
 //     obj[value.id] = value;
 //     return obj;
 //   }, {})
 //   let arr2 = arr.reduce(function( obj, value ) {
 //     obj[value.id]=value;
 //   return obj;
 // }, {});
 
 // return arr2;
   // }
   // 
 
 
 
 //   function groupById(array) {
 //   return array.reduce((obj, value) => {
 //     obj[value.id] = value;
 //     return obj;
 //   }, {})
 // }