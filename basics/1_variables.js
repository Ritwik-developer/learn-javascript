//how to declare constants
const accountTd = 12345; //const doesn't change
let accountEmail="ritwik@gmail.com";
var acoountPassword="12345";
accountCity="jaipur";
let accountState //shows undefined because we didn't assign any value to it.

//accountTd=2; //not allowed
accountEmail="rit@gmail.com"
acoountPassword="1234";
accountCity="Delhi";

/* 
prefer not use var because of issue in block scope and functional scope
*/
console.table([accountTd,accountEmail,acoountPassword,accountCity,accountState])