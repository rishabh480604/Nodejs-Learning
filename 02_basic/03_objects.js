/*can form object in two Way 
1)literal  
2) constructor- singleton

*/
// singleton -when use contructor 

// object.create;

//object literal
const sym=Symbol("myData");
const Jsuser={ //object created
    name:"Rishabh",
    "full name":"rishabh Na",
    [sym]:"myData",
    age:18,
    location:"AP",
    email: "@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
};

// console.log(Jsuser.age);//can access if writen without comma
// console.log(Jsuser["age"]);
// console.log(Jsuser['full name']);

//to use symbol in object
//write Symbol name in square bracket and other as val

// console.log(Jsuser[sym]); //call symbol
// to modify data
Jsuser['name']="Shyam";
//Object.freeze(Jsuser); //prevent from further modification
Jsuser['age']=20;
// console.log(`my name is ${Jsuser.name} age ${Jsuser['age']}`);
// console.log(Jsuser);

Jsuser.greet= function (){
    console.log("hello user");
}
Jsuser.greets=function(){
    console.log(`Hello ${this.name}, Welcome to JS`);
}
console.log(Jsuser.greet());//without parenthesis is function give reference id
console.log(Jsuser.greets());