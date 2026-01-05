/*
var a=10
console.log(a);

var a=100
console.log(a);

let b=12
console.log(b);

//let b=7
//
console.log(b);
*/


/*
var b=100
b=500 // reinitialization allowed
console.log(b);

let a=100
a=200 //reinitialization allowed
console.log(a);

const c=500
c=2000     //reinitialization allowed not allowed
console.log(c);
*/

var e;
console.log(e);

let d;
console.log(d);

//const f;
//console.log(f);

var a=10
console.log("this area is global scope");

{
    let b=50;
    console.log("this area is block scope");
}

function abc(){
    let c=400
    console.log("this area is local scope");
    
}

abc()

//global scope
//block scope
//function scope or local scope

var a=10
let b=500
const c=1000

console.log("this is area is global");
console.log(a,b,c);


{
 
    console.log("this area is block scope");
    console.log(a,b,c);
    
}

function abc(){
    let c=400
    console.log("this area is local scope");
    
}

abc()


{
    var x=6
    let y=7
    const z=8
     console.log("this area is block scope");
     console.log(x,y,z);
     console.log(a,b,c);
     
     

}

// var only global for all & it will not follow bloack scope
function mno(){
var m=2 //local area
let n=3 //local area
const o= 4 //local area

console.log(a,b,c);
console.log(m,n,o);


}
mno()









