const firstArg = process.argv[2];
const myNumber = parseInt(firstArg);
if (isNaN(myNumber)) {
  console.log("Not a number");
} else {
  // If it's a valid number, print it in the specified format
  console.log("My number:", myNumber);
}
