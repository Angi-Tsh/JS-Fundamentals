const sizeArg = process.argv[2];
const size = parseInt(sizeArg);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let outputString = "";
  let rowCount = 0;

  while (rowCount < size) {
    let rowContent = "";
    let colCount = 0;

    while (colCount < size) {
      rowContent += 'X';
      colCount++;
    }

    outputString += rowContent;
    outputString += '\n';
    rowCount++;
  }

  outputString = outputString.slice(0, -1);

  outputString && console.log(outputString);
}