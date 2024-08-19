//arrays
let dc_heroes=['batman','flash','superman']
let marvel_heros=['ironman','thor','hulk']
const all=dc_heroes.concat(marvel_heros);//return all element as individual
// console.log(all);

//.push() directly push array as singe element
//another way is
//using spread
const all_heros=[...dc_heroes,...marvel_heros];//can use further more aarays
console.log(all_heros);


const nested_arr=[1,2,[3,4,5],6,[[7],8,[[9]],0]];
//to convert nested into normal 
const flat_arr=nested_arr.flat(Infinity);//input is upto which level it checks
console.log(flat_arr);

//to convert data into array
console.log(Array.isArray(flat_arr));//to check is it aray
console.log(Array.from("123"));
console.log(Array.from({name:"Rishabh"}));//cant able to on dictionar have to define it more
//last return empty

