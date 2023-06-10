var aCal = function(b) {
    return b * b;
}
console.log("calling anonymous function:" + aCal(6));

//new constructor
var cCal = new Function("a", "return a*a;");
console.log("calling constructor function:" + cCal(7));

//self invoking function
(function(a) {
    console.log("calling self invoking function:" + a * a);
    return a * a;
})(9);