//array
//deep copy -share copy value not actual reference
//shallow copy-share reference point change in original data


const myArr=[1,2,3,4,true];//can have mix data type
//is dynmic
// console.log(myArr[0]);

const myHeroes=["sharktiman","nagraj"];
const arr=new Array(1,2,3,4);
// console.log(arr);
// console.log(myHeroes);
//to add element
arr.push(0);
//to remove last
arr.pop();
//to addfirst
arr.unshift(7);
//to remove first or move left
arr.shift();

//to check element exist
// if exist true
// else false
// if outof index return -1
// console.log(arr.includes(2));

//.join convert arr to string

//slice vs splice
let a=[1,2,3,4,5,6,7];
console.log('A '+a);

console.log("B "+a.slice(1,3));//no change in array

console.log(a);

console.log("C "+a.splice(1,3));//end index included//remove this part from original arr
console.log(a);//original has data has missiing spice data

