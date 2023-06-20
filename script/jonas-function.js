//function is a piece of code that we can reuse in a code. it can also receive and send data.

/*function logger() {
    console.log("My name is James")
}


logger(); //invoking, running, calling function
logger();
logger(); // therefore i just call the function three times
// apples and oranges  are paramters.
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const applejuice = fruitProcessor(5, 0); // this is called the arguments.
console.log(applejuice);
// reusing the code
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
const num = Number('23');
console.log(num);
*/
// parameter are placeholder in the function while the argument are the values that is used to filled in the placeholder.

/*
// function is also a value but not a string or anything 
//  FUNCTION DECLARATION
//Example of FUNCTION DECLARATION
// it calculates person age
function calAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calAge1(1996);
console.log(age1);

// FUNCTION EXPRESSION
const calAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1996);
console.log(age1, age2);
// The difference between function declaration and function expression is you can call a function without first declaring it. but in function expression you can't do that.
*/


// FUNCTIONS CALLING OTHER FUNCTION meaning call a function inside a function. 
function cutFruitPiece(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPiece(apples);
    const orangePieces = cutFruitPiece(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));