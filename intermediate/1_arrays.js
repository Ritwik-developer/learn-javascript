// array

//array declaration in square bracket
const myArr = [0,1,2,3,4,5] //012345 are elements can ne string,numbers or mix.elements can be different
const myHeros=["shaktiman","nagraj"]
const myArr2= new Array(1,2,3,4)

// console.log(myArr[0]); //elements are accesses by index
// console.log(myHeros);
// console.log(myArr2); //[1,2,3,4]

// console.log(typeof myArr); //all are object
// console.log(typeof myHeros);
// console.log(typeof myArr2);

//array methods

// myArr.push(6)   //simply add element in array at last index
// myArr.pop() //remove element from last

// myArr.unshift(9) //it adds element at first but this will shift all element 
// myArr.shift() //remove element from first

// console.log(myArr.includes(3)); //some methods questionable which gives answer in true or false.it boolean type

// //indexOf

// const newArr=myArr.join()



// console.log( myArr);
// console.log( newArr); //
// console.log( typeof newArr); //string

//slice,splice
//Difference=>splice original array ko change karta hai  aur index include hota hai second parameter wala

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr); // b [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);




