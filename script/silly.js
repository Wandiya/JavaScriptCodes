var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var storyText =
    "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

var insertY = ["the soup kitchen", "Disneyland", "the White House"];

var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':inserty:', yItem);
    var newStory = newStory.replace(':insertz:', zItem);

    if (customName.value != '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);

    }

    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.0714286) + ' stone';
        var temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';
        var newStory = newStory.replace('94 farenheit', temperature);
        var newStory = newStory.replace('300 pounds', weight);

    }


    story.textContent = newStory;
    story.style.visibility = 'visible';
}