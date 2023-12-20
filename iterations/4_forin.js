// for in loop
//forof object keliye kaam nhi kar raha tha
// forin map me kaam nhi karta hai

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }


// for (const key in myObject) {
//     // console.log(`${key}`); //printed the key only
//    // console.log(`${myObject[key]}`); // print key ki value only
// }

//forin  loop for array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //array me key jo hai index hota 0 se start
    //output 0 1 2 3 4
    //console.log(programming[key]); //js rb py java cpp
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);//map is not iterable
}
