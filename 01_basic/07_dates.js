//dates
let myDate=new Date();
//console.log(myDate.toString()); //date in ist format
//console.log(myDate.toDateString());//only day date
// console.log(myDate.toLocaleString()); //similar to pc format
//date type object

// let myCreatedDate=new Date(2023,1,23);
let newDate=new Date("2023-03-22");
console.log(newDate.toDateString());
//month start from 0 in js
// console.log(myCreatedDate.toDateString());

//to compare time convert to .getTime() now compare in millisec
//console.log(newDate.getMonth()+1);//start from 0 so add 1
console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleDateString('default',{
//     calendar : 'long',
// }));  for more customize
