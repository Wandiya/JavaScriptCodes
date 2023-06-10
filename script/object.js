Horse.displayType();

var Trainer = {
    name: "ABC",
    subjects: ["math", "physics", "chem"],
    teaches: ["F", "S"],
    age: 60
}
var properties = null;
for (p in Trainer) {
    properties += p + " : "

}
console.log(properties)