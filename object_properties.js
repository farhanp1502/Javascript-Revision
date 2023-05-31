
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// Object.defineProperty(obj, propertyName, descriptor)

// let user = {
//   name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2 ) );
// /* property descriptor:
// {
//   "value": "John",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }
// */


// let user = {
//   name: "John"
// };

// Object.defineProperty(user, "name", {
//   writable: false
// });

// user.name = "Pete"; // Error: Cannot assign to read only property 'name'




// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// // set fullName is executed with the given value.
// user.fullName = "Alice Cooper";

// alert(user.name); // Alice
// alert(user.surname); // Cooper