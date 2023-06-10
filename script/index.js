/*const cricle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw');
    }
};
cricle.draw(); // curly braces are object ;literals. An object in javascript is essentially a collection of key value parents.
*/


/*function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');

    }
}
circle.call
const another = new Circle(1);
*/


//  primitive and reference types
/*let x = { value: 10 };
let y = x;

x.value = 20; 


// Primitives are copied by their value while objects are copied by their reference(address.) */

/*
//  primitive are also called value types.these are Number, string, Boolean, symbol, undefined and null.
let number = 10;

function increase(number) {
    number++;
}
increase(number);
console.log(number);
*/

// reference types are object, function and array
/*
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);

// objects in javascripts are dynamic
*/



// enumerating properties
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}


const keys = object.keys(circle);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius.');
// its returning both value and properties.


// arrays in javascript
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}



numbers.forEach(function(number) {
    console.log(number);
});