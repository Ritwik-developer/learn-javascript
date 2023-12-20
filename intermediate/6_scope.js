//Scopes
//{} curly braces in scope in fn,ifelse,loop
//var=>global scope ye pura program me available hoti hai
//let sirf {} or block me available hota hai .
//block scope ke andar ka variable baar accessible nhi hona chahiye.
//global scope pe koi farak nhi prta hai block scope ke variable ka.
//global scope browser console me aur global scope code env. node se karte hai ye dono alag hai 
// closure


//other ways to write fns
const addTwo = function(num){
    return num + 2
} //addTwo is expression
//fn declaration se phle fn call karsakte hai but expression me phle call nhi karsakte hai
addTwo(5)
//hoisting