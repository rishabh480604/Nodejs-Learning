let score="33a"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber= Number(score); //convert string to number
// console.log(typeof valueInNumber); //typ will be number
// console.log(valueInNumber);// value is not number return NaN

//case for null
let data=null
let dataInNum=Number(data);
// console.log(dataInNum); //return 0
// console.log(typeof dataInNum); //number

//case for undefined same doesnt change
let val;
let valNum=Number(val);
// console.log(valNum); // Nan
// console.log(typeof valNum); //number

//Boolean
// data of string convert to boolean return true else false
// number 0 false else true

//********************* Operations *********** */

let a=3;
let nega=-a;
// console.log(nega); //-3

// 2**3=8

let str="hello"+ " guys"; //string concat
// add num to string return string
// console.log(1+1+"3"); //reading goes from left to right 2 +"3"
console.log(3 + 4 * 5 % 3); //not prefer put paranthesis
console.log(+"");