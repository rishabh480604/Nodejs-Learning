// js is dynamic type langugae 
// no need to declare variable type

//primitive

// 7 types : String , Number , Boolean , null, undefined, Symbol ,BigInt


//refrence type (non primitive)

// array , object, function

// const score: Number=8; use in type script
// to avoid data issue

//creating symbols
const id=Symbol("123");
const id2=Symbol("123");
//both will be treated diffrent
console.log(id==id2); //false

const bigNum=687676n; //to define bigint
console.log(typeof bigNum);

const heros=["shaktimab","naagraj","doga"]
let myobj={
    name : "hitesh",
    age:22,
}
console.log(typeof heros); //object type
console.log(typeof myobj); //object type

const myFunction =function () {
    console.log("hello world");
}

function fun() {
    console.log("hello from another function ");
}
console.log(myFunction); //return object call as object function
fun();

// https://262.ecma-international.org/5.1/#sec-11.4.3


/************ Stack and Heap************* */
let name="alpha";
let anothername=name; //here value is copied at new position
anothername="beta"; //new position value is changed
console.log(name);
console.log(anothername);

let user={
    name:"rish",
    age:17,
};
let anotheruser=user; //reference is taken
anotheruser.age=19;  //value assigned to reference point
console.log(user.age); //change reflected