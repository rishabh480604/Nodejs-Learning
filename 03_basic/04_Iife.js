//Immediately Invoked Function Expressions (IIFE)
function chai(){
    console.log('DB CONNECTED');
}
// to make a function iife put it in () and one after it then  semicolon
//single execution
// 
(function chais(){ //named iife
    console.log('DB CONNECTED');
})();

//in other way
((name) =>{
    console.log(`DB CONNECTED TO ${name}`)
});

