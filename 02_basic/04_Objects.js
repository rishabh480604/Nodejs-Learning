//not singleton
// const tinderObj={};


//sigleton
const tinderUser=new Object();
tinderUser.name="Ram";
tinderUser.age=20;
tinderUser.isLoggedin=false;

// console.log(tinderUser);

const regularUser={
    email:"anony@gmail.com",
    userfullname:{
        firstname:"rishabh",
        lastname:"NA"
    }

}
// while fetching ? used can be case where that attribute is absent
// console.log(regularUser.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={2:"c",3:"d"};
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}
/*
assign has two parameter first is target and rest are source
and same target is return ed also
its best practice to make first parameter empty

can also done by spread method
*/


const users=[ //array
    {
        id: 1,
        email:"alpha@gmail.com"
    },
    {
        id: 1,
        email : "alpha@gmail.com"
    },
    {
        id: 1,
        email : "alpha@gmail.com"
    },
    {
        id: 1,
        email : "alpha@gmail.com"
    },
    {
        id: 1,
        email : "alpha@gmail.com"
    },
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //get all keys in array form
// console.log(Object.values(tinderUser)); // print val of each keys
// console.log(Object.entries(tinderUser));//return key-val as araay

// console.log(tinderUser.hasOwnProperty('isLoggedin'));

/* ********* Destructuring Object*************** */
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor

/* same can achieve by */
const {courseInstructor:instructor}=course
console.log(instructor); //directly use variable

// json object returned by api has no name
// //json sample
// {
//     "name":"ris",
//     "coursename":"js",
//     "price":"free"

// }

//sometime received can be in array
