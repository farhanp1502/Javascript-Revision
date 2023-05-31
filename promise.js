// random number generate
//if random numer is <0.5 resolve
//ten reject





// let p = new Promise ((resolve,reject)=>{
//   let a = Math.random().toFixed(2);
//   console.log(a)
//   if(a < 0.5){
//     resolve('resolved');
//   }
//   else{
//     reject(error);
//   }
// })
// .then(alert)
// .catch((error)=>{
//   console.log(error);
// })



// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);



let p1 = new Promise((resolve,reject)=>{

  if(true){
    resolve();
  }
  reject();
  

})
.then(add=()=>{
  let a = 10;
  let b = 10;
  let c = a+b;
   console.log(c)
   return c;
}).then(sub=(c)=>{
  
  let d = 20;
  let e = d-c;
  console.log(e)
  return e;
}).then(div=(e)=>{
   let f=2;
   let g = e/f;
   console.log(g)
   return g;
}).then(mul=(g)=>{
  let h = 2;
  let i = h*g;
  console.log(i);
  return i;
}).catch((error)=>{
  console.error(error);
})