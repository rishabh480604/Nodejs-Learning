let a=300;
//defined here becomes global
if(true){
    //defined in this block only
    let a=12;
    const b=10;
    // var c=20;
    console.log("inner :"+a);
    fun

}
console.log("outer :"+a);

// console.log(c); //when car declared it doesn't follow scope

// for(let i=0;i<5;i++){

// }
//scope in code enviroonment and in browsser is different

function one(){
    const username="rishabh";

    function two(){
        const website="youtube";
        console.log(username);
    }
    //console.log(website); not be accessed
    two();
}
one();

// ********* Interesting*******//

 
console.log(addone(4));
function addone(nums){// if declare like that then can be called first also
    return nums+1;
}

// another ways of declaring function
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(4));// if it is put prior to function it will give error

//to run function parenthesis is compulsory



