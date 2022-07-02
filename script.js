//Array - An array is a special variable, which can hold more than one value.
//Syntax:-
//const array_name = [item1, item2, ...]; 

// there r 2 types of array..

// 1. var arrayname = [element];
// 2. var arrayname = [elements0,element1......elementn];

var a = ["abdul haseeb", "BE", 2020];
document.write(a + "<br><br>");
// console.log(a);

// print particular value

console.log(a[1]);
document.write(a[1] +"<br><br>");

// checking length of array..here "length"
console.log(a.length);

// adding new array 1.push() array--add element @ the end of array
// 2. unshift() array

a.unshift(1)
console.log(a);
a.push("ACSCE");
console.log(a);
document.write(a + "<br><br>");

// popping an array 1. shift() 2. pop() array

a.shift();
console.log();
document.write(a + "<br> <br>");

a.pop();
console.log(a);
document.write(a + "<br> <br>");

// if we wnt delete or add particular element we can use slice() function()

// slice():- The slice() method returns selected elements in an array, as a new array.

var manush=[0,1,2,3,4,5];
document.write(manush + "<br> <br>");
console.log(manush);
var dhanjay = manush.slice(1,2);
document.write(manush)
console.log(manush);

// merging two or more arrays--we can use concat() function

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

// join() function array 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();