//ESS - FUNCTIONALLY SCOPED
//ES6- BLOCK SCOPED

//Scoping function
/*     
function testing (){
    var abc = 20;
    let def = 100;
    console.log(abc);
    //block scope
    if(1) {
        var xyz = 'block scope';
        console.log('Inside if' ,xyz);
        console.log(abc);
    }
    console.log('Outside if' ,xyz);

}
testing(); //calling a function
*/

/* 
var name = 'Cipher';
let year= 2020; //global scope 
function test() {
    console.log(name);
    console.log(year);
}
test(); */

/* 
//Function Declaration and function Expression 

//hoisting
myFunc();
myFunc2();

function myFunc(){
    console.log('Inside myFunc Declaration ');
}
let myFunc2= function() {
    console.log('Inside myFunc2  function Expression ');
} 
*/
// //console.log(name2)
// name();
// //var name2='Mridula';
// function name(){
//     console.log('hello');
// }

// //Arrow function
// let newFunc = () => {
//     console.log('Arrow Function created');
//     console.log(this);

// }
// newFunc();

// let funcExp = function(){
//     console.log('Function expression created');
//     console.log(this);
// }

//funExp()
let newFunc =(name) =>  console.log(name);
newFunc('Cipher'); //argument