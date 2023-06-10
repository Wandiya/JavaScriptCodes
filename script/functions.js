/*
//functions

//functions declarations
//regualr functions
function sayHi(name, gender = "unknown") {
    console.log("Hi", name, "!");
    console.log("Your gender is:", gender);
}
//arrow function

// let sayHello = (name) => {
//     console.log("Hello", "name", "!");
//}

sayHi("Jerry", "M");
sayHi("James")
    // sayHi("James")
    // sayHi("John")
    // sayHi("Jenny")
    // sayHello("Tom")

    */
/*
// function practice class
function pickComputerMove() {
    const randomNumber = Math.random();


    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return 10;
}*/
/*
function calculateTax(cost, taxPercent = 0.1) {
    console.log(taxPercent);
    console.log(cost * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);

//Paramter  puts a value into a function
// syntax rules for parameters

//functions let us reuse code 
//return get a value out of a function
//parameters put values into a function

*/

/*


// ************************************
// objects create multiple values together  //{} are objects. 
// name, price are the property. 
// name:'sock' are property-value pair
const product = {
    name: 'socks',
    price: 1090
};
console.log(product);
console.log(product.name); //output: it will display a string socks in the console.
// accessing product.name is called Dot Notation and if it does not exist, it logs undefined.
console.log(product.price);
product.name = 'cotton socks';
console.log(product);

product.newProperty = true;
console.log(product); //output: name:cotton socks, price:1090, newProperty:true

delete product.newProperty;
console.log(product); //output: it will delete newProperty:true.

// To know the type 
console.log(typeof product); // output: object.

/*
// why we use objects
 1. objects make out codes organized
 2. it group multiple values together
 3. it use multiple values togther
 4. inside an object, we can save any type of value because object themselves are also values.

*/
/*
const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87 //nested object. i.e. an object inside another object.
    },
    fun: function function1() {
        console.log('function inside object')
    }
};
console.log(product2);
console.log(product2.name); // accessing prouc
console.log(product2['name']); //accessing product2.['name'] is bracket Notation. Bracket Notation let us use properties that don't work with dot Notation such as

console.log(product2['delivery-time']); // try this incorrect one console.log(product2.delivery-time). output is error.

console.log(product2.rating.count);
product2.fun();

console.log(typeof console.log);
// now which should we use?
// -we use Dot Notation by default and easier to read.

// MORE BUILT-IN OBJECTS
// JSON and localStorage

// JSON stands for Javascript Object Notation and it is a - syntax - similar to Javascript object but has less features.it does not support single quotes but double quotes, it does not support functions. JSON syntax is more universal because its really understood in other programs.
/*
// Example of JSON built-in Methods
// Example 1
console.log(JSON.stringify(product2));
console.log(typeof JSON.stringify(product2)); //To know its type.
*/

/*
//To convert JSON to JavaScript   and JSON.parse()
console.log(JSON.stringify(product2));
const jsonStringify = JSON.stringify(product2);
console.log(JSON.parse(jsonStringify));
*/

/*
// Next is the built-in object localStorage. localStorage only support strings.

console.log('hello'.length);
console.log('hello'.toUpperCase());

// objects are also references
//object group related values together.
// Example 1
const object1 = {
    message: 'hello'
};

const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

// we can't compare objects directly. For example:
const object3 = {
    message: 'Good Job!'
};

console.log(object3 === object1); // output: false because it compares the refernce not the values inside.
console.log(object2 === object1); //output: true because they have the same Reference
*/
/*
const object4 = {
    message: 'Good Job!',
    price: 799,
}; // Destructuring methods
//const message = object4.message; 
const { message, price } = object4;
console.log(message);
console.log(price);


//shorthand property 
/*
const object5 = {
    message: message
};
console.log(object5);
*/

/*
// shorthand method
const object5 = {
    // message: message
    message,
    // method: function function1() {
    // console.log('method');
    // }
    // OR do this instead of the above.
    method() {
        console.log('method');
    }
};
console.log(object5);
object5.method();
// console.log(typeof message);
*/

// LinkedIn exercise
const b = {
    name: "Vivek",
    f: function() {
        var self = this;
        (function() {

            console.log(this.name);
            console.log(self.name);
        })();

    }
}
b.f(); // output: Vivek.
// DOCUMENT OBJECT MODULE(DOM) lesson