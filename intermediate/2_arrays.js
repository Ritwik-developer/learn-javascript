const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //araray ke andar array .andar wala array 3 index pe hoga
// push existing array pe kaam karta hai
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]); //flash

const allHeros = marvel_heros.concat(dc_heros)
//concat return new array
// console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator use this
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)//flat gives all array in single array.in parasenthis me depth or infinity
// console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//when we select data from webpage it gives in different form but we want in array
// console.log(Array.isArray("Hitesh")) //false
// console.log(Array.from("Hitesh"))//convert in array[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // interesting learn about that it aske that keys ka array ya value ka array.if doesn't like in this then give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// multiple array ,varriables it also convert in array
  
