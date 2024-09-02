const user = {
    username: "ris",
    price: 99,
    message: function(){
        console.log(`Hi ${this.username}, the price is ${this.price}`)
        console.log(this);
    }
}
user.message();
user.username="rishabh"
user.message();

//direct printing
console.log(this);//return empty object
//when same is run in browser ,it will give windows object as it in windows object
const name="rishabh"
function chai(){
    const username="name";
    console.log(this);
}
chai();//returning some data 
// to declare arrow function
const chaii= () =>{
    const username="name";
    console.log(this); //doesnt give any output blank object
}
chaii();

// arrow function // () => {}
const fun_name= (num1,num2) =>{
    return num1+ num2;
}
console.log(fun_name(3,5));

//implicit return statement of one line
 //const addTwo =(num1, num2) => num1+num2
 //other way
 //const add = (num1,num2) => (num1+num2) 
 //if it in parenthesis no return statement

 //for returning parenthesis is required
 const fun = () => ({username:"Rishabh"});
 const fun2 = () => {username:"rizz"};
 console.log(fun()); // return object
 console.log(fun2()); // return undefined




