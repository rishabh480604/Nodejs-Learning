const accountId = 144553 //cannot modified
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // beacome gloabl either direct or in function or scope not preferred
//for safe define "use strict"; on top
let accountState; //return undefined because not defined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//table help to print data in form of table with index
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])