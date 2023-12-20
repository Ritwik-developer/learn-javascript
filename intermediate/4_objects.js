// object insingleton or declare with constructor

const tinderUser = new Object()
// console.log(tinderUser);//{ } empty object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//object ke andar object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ritwik",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);//ritwik

// optional chaining(?.) read about it

//combine or merge object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } 
// console.log(obj3);// object ke andar object hojayega { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{}target in this and all are source  means sare object {}object ke andar jayenge
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// best way to merge use spread operator
const obj3 = {...obj1, ...obj2}
//  console.log(obj3);

 //values comes from database in form array of object
 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
]
// console.log(users[1].email) //r@gmail.com

// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //give all keys and type is now array
// console.log(Object.values(tinderUser)); //give all value
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


//Desturcturing => can be done in array and object

//object desturcturing
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ritwik"
}

//how to use this values
// console.log(course.courseInstructor);//ritwik

//best way

const {courseInstructor} = course // value kaha se extract karna hai course object se kya value extract karna hai
// console.log(courseInstructor);//ritwik

const {courseInstructor: instructor} = course // you can  name courseInstructor  to instructor
// console.log(instructor);

//values/response come from api in json form,json formatter

{
    // "name": "hitesh",
    // "coursename": "js in hindi", //keys and values both are string
    // "price": "free"
}

//or
[
    {},
    {},
    {}
]