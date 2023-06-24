function checkSpeed(vehiclespeed) {
    const speedLimit = 70;
    const demeritPoint = 5;
    const maxpoint = 12;
  
    if (vehiclespeed < speedLimit) {
      return "Ok";
    } else {
      const excessSpeed = vehiclespeed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / demeritPoint);
  
      if (demeritPoints > maxpoint) {
        return "License suspended";
      } else {
        return "Points: " + demeritPoints;
      }
    }
  }
  let vehiclespeed = parseInt("100");
  let grid = checkSpeed(vehiclespeed)
  console.log(grid)


//   // Readline module for reading input from the console
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt the user to enter student marks
// rl.question('Enter vehiclespeed): ', (answer) => {
//   const vehiclespeed = parseFloat(answer); // Parse the input as a floating-point number
//   const speed = checkSpeed(vehiclespeed); // Call the calculateGrade function to get the grade
//   console.log(`The vehiclespeed is: ${grade}`); // Display the grade in the console
//   rl.close(); // Close the readline interface
// });