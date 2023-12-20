//string can be double or single quotes 
const name ="Ritwik"
const repoCount= 50

//console.log(name+repoCount); //concatinate,don't use this syntax use backticks

// console.log(`my name is ${name} and ${repoCount}`); //string interpolation=>  jo bhi variable wo inject kardete hai
//also use in applying method like uppwrcase etc

//other ways to declare string

const gameName= new String('ritwikchy') //object  new keyword
// console.log(gameName[0]); //r

// console.log(gameName.__proto__) //{}=> object

// console.log(gameName.length) //9 fn or method same


// console.log(gameName.toUpperCase()) //RITWIKCHY original value of gameName doesn't change 

// console.log(gameName.charAt(8)) //gives that which character is at this position and output y .

// console.log(gameName.indexOf('y')) //8 gives index of character

//substring
const newString= gameName.substring(0,4) //last index 4 is not include
console.log(newString) //ritw

//slice(-8,4) this will start from reverse counting.in slice we can  give -ve value

//trim() remove starting and last whitespaces ko remove kardeta hai

// const newStringOne = "   ritwik    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

//replace,includes(gives boolesn value),split
const url = "https://ritwik.com/ritwik%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); //output is in array
