console.log("I am a external java Script");

//clg or log --> shortcut to print console.log()
console.log();


// how to declare variable
// var,let,const difeerces important

// 1.var keyword

var playername;//Variable declaration
playername="Diya"//variable initialization
console.log("player name is"+playername);

var age=36;
console.log("age is"+age);

age=37;//Reinitialization
console.log("now age is :"+age);

var age=87;// ***re declaration is possible in var keyword***
console.log("re declaration "+age);


//2.let keyword

let teamname;//  Variable declaration

teamname="Rcb";//Variable initialization

console.log("team name is "+teamname);

let jerseyNo=18;
console.log("jersey no is "+jerseyNo);

//let jerseyno; // not possible


//3.const keyword



 // js is syncronised how much lines right at that line it will give output wneevr error come stop

const pi=3.14;
//declaration and declaratio in same possible
// redeclaration and reinitialization also not possible
console.log(pi);
