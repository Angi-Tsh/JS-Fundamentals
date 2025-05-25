const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let outputString = "";
let i = 0;

while (i < messages.length) {
  outputString += messages[i];
  outputString += '\n';
  i++;
}

outputString = outputString.slice(0, -1); // This line is crucial for the length

console.log(outputString);