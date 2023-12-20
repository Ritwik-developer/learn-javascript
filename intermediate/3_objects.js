// object can be declared as literal and constructor and another method object .create
//singleton=> when you make object with constructor.apne tarah ka ek hi object hai

// object literals  const jsUser={} object
//in array key define nhi karne dete hai

const mySym = Symbol("key1") //symbol declaration

const jsUser = {
    name: "Ritwik",  //key:value key is default string but value is anything
    "full name": "Ritwik Choudhary",
     [mySym]: "mykey1", //you want to use symbol as akey put in square bracket
    age: 18,
    location: "Jaipur",
    email: "ritwik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//access object with dot operator

// console.log(jsUser.email) //ritwik@google.com
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]) //mykey1

jsUser.email = "ritwik@chatgpt.com"
// Object.freeze(JsUser) //it freezes the value you don't able to change the value
jsUser.email = "ritwik@microsoft.com"
// console.log(jsUser); 

//add fn to object.fn ko variable ki tarah treat karte hai js me

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//jb abhi apko same object(jsuser) ko reference karna hai this use karenge
}
console.log(jsUser.greetingTwo()); //Hello JS user, Ritwik and also gives undefined  in output


// console.log(jsUser.greeting);//[Function (anonymous)]
// console.log(jsUser.greeting())//Hello JS user