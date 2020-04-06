var subjectList = ["The Eagle has", "The Owl has", "The Arrow has", "The butterflies have", "Our bundle of joy has", "A dozen eggs have",
    "Fifty red balloons have", "The puffy clouds have", "A lovely swan has", "The last bottle of wine has", "The cruel fox has",
    "Mother has", "Father has", "Your ex lover has", "Brother has", "Sister has", "The doctor has", "The nurses have", "The bacon has"];

var verbList = [" landed.", " arrived.", " made the grade.", " taken the bait.", " eaten the bacon.", " seized the day!", " painted the town.",
    " spoiled the milk.", " planned a picnic.", " licked the stamps.", " played the piano.", " melted the ice.", " given the medicine",
    " taken the pills", " given permission.", " reached the destination.", " acquired immunity.", " baked the potato.", " cut the cake!", " sizzled."];


// get textbox for new phrases and generator button
var phraseZone = document.querySelector("#phraseZone");
var generatorButton = document.querySelector("#generatorButton");
var copyButton = document.querySelector("#copyButton");

// add listener to buttons
generatorButton.addEventListener("click", generatePhrase);
copyButton.addEventListener("click", copyPhrase);

// make function that does the generating and changing display
function generatePhrase() {

    //grab a random item from each array
    var subject = subjectList[Math.floor(Math.random() * subjectList.length)];
    var verb = verbList[Math.floor(Math.random() * verbList.length)];
    //combine the two random selections and set the text area.
    phraseZone.textContent = subject + verb;
}

// make a function to copy the generated phrase
function copyPhrase() {
    var copyText = phraseZone.textContent;
    var tempText = document.createElement('textarea');
    tempText.value = copyText;
    document.body.appendChild(tempText);
    tempText.select(); 
    document.execCommand("copy");
    document.querySelector("textarea").remove();
    alert("Copied the Spy Phrase!");
  }


