//loops or iterators or iterations
//for loop
//multicursor alt+click

// for (let index = 0; index <=10; index++) {
//     const element = index;
//     console.log(element);
    
// }
// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length); //3
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break //loop se bahar ajayega
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue //ireration skip karte deta hai loop ke andar hi rahenge
    }
   console.log(`Value of i is ${index}`);
    
}