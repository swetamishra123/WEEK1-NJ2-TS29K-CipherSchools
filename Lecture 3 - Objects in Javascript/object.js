let obj = { name: " Cipher" }
//console.log(obj)

let person = {
    name: "John",
    email: "john@wick.com",
    age: 25,
    status: true,
    children: {
        name: "Jay"
    },
    hobbies : [ 'Reading' , 'Writing',true, 100 , null ]
}

let clickName = 'name';

// console.log(person.status);  //true  
// console.log(['age']); //[ 'age' ]
// console.log(person['children']);  //{ name: 'Jay' }


// console.log(person[clickName])  //John


console.log(person);
person.country = "India";
// console.log(person);
/* {
  name: 'John',
  email: 'john@wick.com',
  age: 25,
  status: true,
  children: { name: 'Jay' },
  country: 'India'
} 
*/

console.log(typeof person.hobbies)   //Object
console.log(typeof null)  //object 

/*  
Primitive Data Types : NUmber , String , Boolean, Undefined
Reference Data Types 
*/