// function sumTo(n) { 
//   if(n == 1) return 1;
//   else
//   return n + sumTo(n - 1);
//  }

// alert( sumTo(100) ); // 5050





// function factorial(n){
// if (n==1)
// return 1;
// else if(n==2)
// return 2;
// else 
// return n * factorial(n-1);
// }
// alert( factorial(10) ); // 120




// function fib(n) { 
  
//    if(n==0)
//   return 0;
//   else if(n==1)
//   return  1;
//   else if(n==2)
//   return 1;
//   else 
//   return fib(n-1) + fib(n-2);
//  }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(10)); // 5527939700884757





let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// function printlist(list){
//   let temp = list;
//   while(temp){
//     console.log(temp.value)
//     temp = temp.next;
//   }
// }
// printlist(list);


// function printlist(list){
//   alert(list.value);
//   if(list.next){
//     printlist(list.next);
//   }
// }
// printlist(list);



// function reverselist(list){
//   let a = [];
//   let temp = list;
//   while(temp){
//     a.push(temp.value);
//     temp = temp.next;

//   }
// return a.reverse();

// }
// alert(reverselist(list));


// let a = []
// function printlist(list){
   
//     a.push(list.value)
//     if(list.next){
//       printlist(list.next);
//     }
//     return a;
//   }
 
//   alert(printlist(list).reverse());