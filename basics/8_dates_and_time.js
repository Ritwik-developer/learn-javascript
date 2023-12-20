//Dates

let myDate=new Date()
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString()); //gives only date

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);//object

//create specific date

// let myCreatedDate = new Date(2023, 0, 23) //month start from 0 index
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //5 hour 3 mins
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//use when you want exact timestamp value
let myTimeStamp = Date.now()

// console.log(myTimeStamp);//gives in milisecond
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //gives in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {   //ctrl+space give property suggestion
    weekday: "long",
    
})
