const nums=[1,2,3,4,5,6,7,8];

//use reduce to perform operation on array
const mytotal=nums.reduce((acc,currval)=>{
    console.log(`acc : ${acc}  currval ${currval}`)
    return acc+currval
},100);//the val after , is initial val for acc

console.log(mytotal);

const shop=[
    {
        name:"js",
        price:23
    },
    {
        name:"java",
        price:34
    },
    {
        name:"app develop",
        price:887
    },
    {
        name:"jq",
        price:223
    }
];
const sum=shop.reduce((acc,item)=> item.price+acc,0);
console.log(sum);