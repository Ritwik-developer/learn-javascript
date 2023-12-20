//forEach

const coding=["js", "ruby", "java", "python", "cpp"]

// syntax
//array.forEach(element => {
    
// });
//callback fn me fn name nhi hota hai

// coding.forEach( function (val){  //val is parameter kuvh name hoskta hai
//     console.log(val); 
// } )

//arrow fn usekre
// coding.forEach( (item) => { //item is parameter
//     console.log(item);
// } )

// fn ko foreach loop use karna
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //reference dena hai execute nhi karna hai

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
} )
  //array ke andar object like[{},{},{}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )