const score=400
// console.log(score);

const balance= new Number(100) //this will give number only not other thing than that
// console.log(balance);
// console.log(typeof balance);//object

// console.log(balance.toString()) //change to string
// console.log(balance.toFixed(2)) //100.00

const otherName=23.8966
// console.log(otherName.toPrecision(3)) //23.9 precision decimal se pahle wale me hota hai

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //type object,in inspect on console we get all
// console.log(Math.abs(-4)); //-ve value becom +ve.output4
// console.log(Math.round(4.6));//5 because after decimal is greaterthan 5
// console.log(Math.ceil(4.2)); output is 5.always choose the top value
// console.log(Math.floor(4.9));//output 4.it choose lower value
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8));//8


// console.log(Math.random());// gives values b/w 0 and 1

// console.log((Math.random()*10) + 1);

// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)