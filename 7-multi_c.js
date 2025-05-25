const numOccurrencesArg = process.argv[2];
const x = parseInt(numOccurrencesArg);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let outputString = "";
  let count = 0;

  while (count < x) {
    outputString += "C is fun";
    outputString += '\n';
    count++;
  }

  outputString = outputString.slice(0, -1);

  outputString && console.log(outputString);
}