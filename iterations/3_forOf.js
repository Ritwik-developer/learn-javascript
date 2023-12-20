//for of loop.this loop is array specific

// ["", "", ""] array ke andar string
// [{}, {}, {}] array ke andar object
//iterator are string,array,objects we can loop these

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) { iterator is like we take i in for loop aur object mtlb kis jispe lagana hai loop
    
// }



// for (const num of arr) { //num is variable
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

//maps is object

const map = new Map()
// console.log(typeof map);
map.set('IN', "India") //IN is key, "India" is value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//map me key and value unique honi chahiye jis order me usi order me rahegi
//isliye map.set('IN', "India") ye print nhi hoga
// console.log(map);

//map pe forof loop
for (const key of map) {
//    console.log(key); //print whole map order wise in array form
}
//if we want key and values alag alag print kar sakte hai
for (const [key, value] of map) {
    console.log(key, ':-', value);
    //IN :- India
//    USA :- United States of America
//    Fr :- France
}
//object ke upar forof loop

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); //errro myobject is not iterable
    
// }
