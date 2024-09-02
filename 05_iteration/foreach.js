const code=['ruby','python','java','cpp']
//forEach it is a call back function
//it pass each element as parameter of functuion
//in foreach max we can pass three parameters
//first will item 
//second will index
//third will array

// code.forEach(function (val){
//     console.log(val);
// })
//or

// code.forEach((val) => console.log(val));

//or 

// function printMe(item){
//     console.log(item);
// }
// code.forEach(printMe);//only give reference dont execute

const myCoding=[
    {
        languageName:"java",
        extension:"java",
    },
    {
        languageName:"javascript",
        extension:"js"
    },
    {
        languageName:"ruby",
        extension:'rb'
    },
    {
        languageName:"python",
        extension:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(`name : ${item.languageName} extension : ${item.extension}`);
})



