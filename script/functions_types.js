// //rest parameter
// function log(...message) {
//     for (let x of message) {
//         console.log(x);
//     }
//     console.log(message.join('-'));
// }
//log('Jerry', 823, false, "lol", "James");

//colsure
let important = 12;

function needImportant1() {
    console.log(important * important);
}

function needImportant2() {
    important += 17;
    console.log(important);
}
needImportant1();
console.log("important after first function:", important);
console.log("important after second function:", important);
//return keyword 
// function add(a, b) {
//     return a + b;
// }
// let sum = add(90453, 932323);
// console.log(sum);

//This keywprd

//hirsting
// function add(a, b) {
//     let sum = add(90453, 932323);
//     console.log(sum);
//     return a + b;
// }
// let sum = add(90453, 932323);
// console.log(sum);

// Hof

// node functions_types.js