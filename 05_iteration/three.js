const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i);
}
const greets="Hello world";
for(const greet of greets){
    // console.log(`char is ${greet}`);
}
//maps 
const map=new Map();
map.set("India","IN");
map.set("France","Fr");

for(const [country,code] of map){
    console.log(`${country} code is ${code}`);
}
const myObj={
    name:"ris",
    age:13
}
//we cant use iterator on object
// for(const [x,y] of myObj){
//     console.log(`${x} -> ${y}`);
// }