feelingArray = ["happy", "sad", "scared", "excited", "thirsty", "tired"];
pronounArray = ["he", "she", "I", "you", "we", "they"];
reasonArray = ["umbrella", "sunglasses", "water bottle", "bike", "ice cream", "homework"];
//shuffle the arrays for use:
shuffledPronounArray = shuffle(pronounArray);
shuffledFeelingArray = shuffle(feelingArray);
shuffledReasonArray = shuffle(reasonArray);

console.log(shuffledPronounArray, shuffledFeelingArray, shuffledReasonArray);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getLeftArea(){
    
    let currentPronoun = shuffledPronounArray.pop();
    if (currentPronoun){
        console.log(currentPronoun);
    } else {
        currentPronoun = "done";
    }
    
    //clear the picture output area
    var picNode = document.getElementById("leftPictureArea");
    while (picNode.hasChildNodes()) {
        picNode.removeChild(picNode.lastChild);
    }
    //Output the picture:
    var picOut = document.createElement("img");
    picOut.src = "gameImages/"+currentPronoun +".png";
    picOut.id = "picture";
    picNode.appendChild(picOut);
}

function getMiddleArea(){
    
    let currentFeeling = shuffledFeelingArray.pop();
    if (currentFeeling){
        console.log(currentFeeling);
    } else {
        currentFeeling = "done";
    }
    
    //clear the picture output area
    var picNode = document.getElementById("middlePictureArea");
    while (picNode.hasChildNodes()) {
        picNode.removeChild(picNode.lastChild);
    }
    //Output the picture:
    var picOut = document.createElement("img");
    picOut.src = "gameImages/"+currentFeeling +".png";
    picOut.id = "picture";
    picNode.appendChild(picOut);
}

function getRightArea(){
    
    let currentReason = shuffledReasonArray.pop();
    if (currentReason){
        console.log(currentReason);
        // check for double words and sanitize:
        if (currentReason === "water bottle"){
            currentReason = "waterBottle";
        }
        if (currentReason === "ice cream"){
            currentReason = "iceCream";
        }
    } else {
        currentReason = "done";
    }
    
    //clear the picture output area
    var picNode = document.getElementById("rightPictureArea");
    while (picNode.hasChildNodes()) {
        picNode.removeChild(picNode.lastChild);
    }
    //Output the picture:
    var picOut = document.createElement("img");
    picOut.src = "gameImages/"+currentReason +".png";
    picOut.id = "picture";
    picNode.appendChild(picOut);
}

function main() {
    getLeftArea();
    getMiddleArea();
    getRightArea();
    
}