// class myclass {
//   constructor(a,b){
//     this.a = a;
//     this.b = b;
//   }
//   addition(c,d){
//     this.c = c;
//     this.d = d;
//     return this.c + this.d;
//   }
//   substraction(){
//     return this.c - this.b;
//   }
// }
// let c = new myclass(10,5);

// console.log(c.addition(15,3));
// console.log(c.substraction());



// class class1 {
//    name = "farhan";
//    age = 35;
//   say(){
//     console.log(this.name +  " " + this.age);
//   }
// }
// const c = new class1();
// c.say();
// let d = new class1();
// d.say();



// class Clock{
//   constructor({ template }){
//     this.template = template; 
//   }
//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//  start() {
//     this.render();
//     this.timer = setInterval(()=>this.render(), 1000);
//   }

// }

// let clock = new Clock({template: 'h:m:s'});
// // clock.start();





class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);


alert( articles[0].title ); // CSS
