const args = process.argv;
if (args[2] === undefined) {
  console.log("No argument");
} else {
  // If it exists, print its value
  console.log(args[2]);
}
