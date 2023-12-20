//function

function sayMyName(){   //sayMyName is fn name
    console.log("ritwik");   //fn definition
   
}
// sayMyName(); //fn call .sayMyName is refernce.sayMyName() is execution

//add two number fn
function addTwoNumbers(number1, number2){ //number1, number2 are parameter
// parameter kb bolenge jb fn definition ke samay
    // let result = number1 + number2
    // return result
    return number1 + number2 // return karne ke baad koi code kam nhi karega
    console.log();
}

addTwoNumbers(3,4) //3,4 are arguments=> jb fn call karte hai tb arguments
 
//fn ko variable me store kar sakte hai
const result = addTwoNumbers(3, 5) // undefined isliye ata hai kyuki fn kuch return na kar rha ho tb

// console.log("Result: ", result); //Result:  8

function loginUserMessage(username ){
  
    return `${username} just logged in`
}

// console.log(loginUserMessage("ritwik")) //when you don't pass any value then it gives undefined

// console.log(loginUserMessage()) //undefined just logged in

function loginUserMessage(username = "sam"){ //parameter ko default value
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

//there is a situation where we dont know no. of parameters.like shopping cart
// rest operator and spread are same but when to call rest or spread it depends
//fn me multiple value pass karte hai rest se
function calculateCartPrice( ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 200, 400, 500, 2000 ]

// function calculateCartPrice1( val1, val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 500, 2000 ]

//object ko fn me kaise pass kiya ja tha hai

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);  //Username is hitesh and price is 199.
//direct object bhi pass karsakte hai

// handleObject({
//     username: "sam",
//     price: 399
// })

// pass array in fn

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] // second value return //parameter pr index myNewArray is generic
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));