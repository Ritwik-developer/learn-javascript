//map
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//{} scope ke ander return likna hai nhi toh undefined milega aur ()me terun likhne ka jarurat nhi hai
//[
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//chaining
const newNums = myNumers
                .map((num) => num * 10 ) 
                .map( (num) => num + 1) //upar wale value ya array use hoga na ki MyNumers wala array
                .filter( (num) => num >= 40)

console.log(newNums);