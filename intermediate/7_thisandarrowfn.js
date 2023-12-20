// arrow fn and this keyword in es6.

//this keyword current context(kiske  refer kar raha hai) ke baare me batata hai
// const user = {
//     username: "ritwik",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//          console.log(this);
//     }

// }
// user.welcomeMessage //only run doesnt give output.
// user.welcomeMessage() //ritwik , welcome to website
// user.username = "sam"
//  user.welcomeMessage()//sam , welcome to website
// node env me log this ko karne se empty ata hai aur conle me window
// browser ke andar global object hai window.

/*******************arrow fn***************/
//aap fn ke andar this ko log log karte hai toh bahut saare methods ate hai node env me
// fn ke andar this nhi horha hai

//other ways to declare fn is arrow fn
// const chai =  () => { 
//     let username = "hitesh"
//     console.log(this);//undefined
// }
// chai()

//()=>{}
// const addTwo =(n1,n2) =>{
//     return n1+n2
// }
// console.log(addTwo(4,6));

// const addTwo = (num1, num2) =>  num1 + num2 I// THI IS CALLED AS MPLICIT RETURN .return likhne ka jarurat nhi hai

// const addTwo = (num1, num2) => ( num1 + num2 ) //other ways.{}culy braces me return likha prega but para() me nhi likhna hoga

//yadi object return karna hai toh.
const addTwo = (num1, num2) => ({username: "hitesh"})

