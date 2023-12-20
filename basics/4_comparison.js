//they all gives boolean value
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//problems qccur when diff.datatype
// console.log("2">1); //true
// console.log("02">1); //true
//try not to use diff.datatype comparison

//comparison undefined with 0 always gives false
//comparion with null does give unperdictable sometimes so avoid them
// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//comparison convert null to a number,treating it as 0.//true

// === strictly equal they also check values and datatype.
console.log("2"==2); //true "2" convert to number
console.log("2"===2);//false
