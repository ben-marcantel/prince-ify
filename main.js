let input = document.getElementById("input");
let output = document.getElementById("output");
const button = document.getElementById("button");
let userInput;
const brain = require('brain.js');





const trainingData = [
    'I never meant to cause you any sorrow',
  'I never meant to cause you any pain',
  'I only wanted to one time to see you laughing',
  'I only wanted to see you laughing in the purple rain',
  'I only wanted to be some kind of friend',
  'Baby, I could never steal you from another',
  "It's such a shame our friendship had to end",
  "I guess I should've known by the way you parked your car sideways",
  "See, you're the kinda person that believes in makin' out once",
  "Dig if you will the picture",
  "Of you and I engaged in a kiss",
  "The sweat of your body covers me",
  "Can you, my darling?",
  "Can you picture this?",
  "Dream if you can a courtyard",
  "An ocean of violets in bloom",
  "Animals strike curious poses",
  "They feel the heat",
  "The heat between me and you",
  "How can you just leave me standing",
  "Alone in a world that's so cold?",
  "Maybe I'm just too demanding",
  "Maybe I'm just like my father: too bold",
  "Maybe you're just like my mother",
  "She's never satisfied",
  "Why do we scream at each other?",
  "This is what it sounds like",
  "Touch if you will my stomach",
  "When doves cry",
  "Even doves have pride",


];

const lstm = new brain.recurrent.LSTM();


const getInput = ()=>{
    userInput = input.value;
    console.log(userInput);
}

const getOutput = ()=>{
    const result = lstm.train(trainingData, { iterations: 1500 });
    const run1 = lstm.run(userInput);
    output.innerHTML = run1    
}

const ladyCabDriver = ()=>{
    getInput();
    getOutput();
}

button.addEventListener("click",ladyCabDriver);
