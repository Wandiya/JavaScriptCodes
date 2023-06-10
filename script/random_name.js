//write a script that select random name
var names = ["Kate", "Jonah", "Fauziya", "Nehemieh", "Ibrahim", "Jerry", "Sadiq", "Anthonia", "Chinenye", "Selbi", "Serah", "Umol", "Frank"];

function randomName(names) {
    var output;
    var arr_length = names.length;
    var index = Math.floor(Math.random() * (arr_length - 1));
    output = " Your name is " + names[index];
    console.log(output);
}
randomName(names)