// setTimeout(()=>{
//   console.log("hello")
// },1000)
// try{
//   console.log(farhan)//error occured codes stops here so we use try catch
// }
// catch(error){
// console.log(error)
// }

// setTimeout(()=>{
//   console.log("farhan")
// },2000)
// setTimeout(()=>{
//   console.log("pasha")
// },3000)
// setTimeout(()=>{
//   console.log("bye")
// },4000)






// try{
// let age = prompt("enter your age","")
// age = Number.parseInt(age);
// if(age>150){
//   throw new Error("this is not possible")
// }
// }
// catch(error){
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }
// console.log("te script is still running")




// try {
//   alert( 'try' );
  
//   if (confirm('Make an error?')) BAD_CODE();
// } catch (err) {
//   alert( 'catch' );
// } finally {
//   alert( 'finally' );
// }


// try {
//   console.log(erf)
// } catch (error) {
//   console.log("this is an error")
// }
// finally{ // it runs for any instance
//   console.log("great")
//   //close the file
//   //exit the file
//   // write to the log file
// }










  // ...message
// Error message.
// url
// URL of the script where error happened.
// line, col
// Line and column numbers where error happened.
// error
// Error object.
// window.onerror = function(message, url, line, col, error) {
//   alert(`${message}\n At ${line}:${col} of ${url}`);
// };

// function readData() {
//   badFunc(); // Whoops, something went wrong!
// }

// readData();





// class FormatError extends SyntaxError{
// constructor(message){
//   super(message);
 
//   this.name = this.constructor.name;
// }
// };
// let err = new FormatError("formatting error");

// alert( err.message ); // formatting error
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)


