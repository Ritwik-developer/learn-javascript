//object literal
const user = {//properties
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){//method
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
//constructor fn
//new keyword constructor fn hai(ek hi object se multiple instance bnata hai)
//constructor har bar naya copy dedeta hai
//jb bhi new keyword likhte hai ek empty object create hota hai jisko instance bola jata hai
//constructor fn call hota hai new keyword ke karan
//.constructor
//instanceof