// Immediately Invoked Function Expressions (IIFE)
//means fn lika aur turant hi execute karana hai.

//syntax (fn definition)()
//interview me global scope ke pollution se problem  hoti hai kaiwar jobhi declaration,variable ko hatne keliye iife ka use karenge


// (function chai(){
//     // named IIFE fn ka name hai hotoh named iife
//     console.log(`DB CONNECTED`);
// })();
// ist iife ke baad ; phir secind iife hona chai nhi toh error ata hai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')