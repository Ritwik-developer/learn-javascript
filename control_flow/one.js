//if syntax
//if(condition){  //condition should be true to run code inside this braces.
    
// }
//condition evalute to true or false by comparision
//condition are like questionand their ans is in true or false
//<,>,<=,>=,==,!=,===(check type and equality)

//if-else
// syntax if(condition){

// }
// else{

// }
//condn is true the if block run, if condn is false then else block run hoga


//else-if(nesting) for checking multiple condn
//if(cond){}
//else if(cond){}
//else if(cond){}
//else{}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { //&& right left dono true hona chahiye
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {// || right left dono me se koi true hona chahiye
    console.log("User logged in");
}