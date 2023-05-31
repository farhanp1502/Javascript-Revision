let a = {
  firstname: "farhan",
  lastname:"pasha"

}
let fullname = function (){
  console.log(this.firstname +" "+ this.lastname)
}
let c = {
  firstname: "abhi",
  lastname:"shek"
}

let b = fullname.bind(a);
let d = fullname.apply(c,[]);
let e = fullname.call(a,);


