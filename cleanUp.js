// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: I added a line break before `console.log` and before the last `}` so that the code block was formatted correctly. I also used a `return` in the function and moved the `console.log` outside of the function. This gives the developer more control over how to use the function and when to write the `return` to the console.

function askForName() { 
  return "Hello, what is your name?" 
}

console.log(askForName());


// EX 2: Old Version
// function addThreeNums(first, second, third) {
// var sum = first + second + third
// return sum;
//       }

// addThreeNums(1, 2, 3);
// addThreeNums(4, 2, 7);

//EX 2: New Version
//I changed the name of the parameters to num1, num2, and num3 so that they would be similar to the name of the function.
//I added a semicolon at the end of the line where the variable "sum" is declared.
// I added a string to the "return value" to explain what is happening and I used interpolation to include the value of the arguments for the function parameters, as well as the value of the sum variable.


function addThreeNums(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return `The sum of ${num1}, ${num2}, and ${num3} is ${sum}.`;
}
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// EX 3: Old Version:
// func makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();

//EX 3: New Version:
//I am not entirely sure that what I did is an improvement because everything is still wihtin the function, but here's what I did:
//I corrected the misspelling of "func" to "function"
//I took the console.log commands out of the function
//I created variables for each step of the recipe with the idea that you could go in an edit a single step if you decided to add additional information.
//I then created a variable called "recipe" that added a string of text and used interpolation to call each step of the recipe and put each step onto it's own line.
//What I was hoping I could do was put the steps into the function as parameters, so that I could change them when I called the funtion, but I could not figure out how to do that with strings.

function makeFreshPesto(){
  var ingredients = "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, and pepper.";
  var step1 = "Pulse basil and pine nuts.";
  var step2 = "Add garlic and cheeses.";
  var step3 = "Slowly pour in oil.";
  var step4 = "Season to taste.";
  var recipe = `How to make Fresh Pesto:
    - ${ingredients}
    - ${step1}
    - ${step2}
    - ${step3}
    - ${step4}`;
  return recipe
}
console.log(makeFreshPesto());


//  EX 4: Old version
// function average(num1, num2) 
// {
// var sum = num1 + num2;
//     var avg = sum / 2;

// return avg
//   }

//EX 4: New Version
//To make the visual layout of the markup and spacing align to what we were taught to do, I fixed the `{}` so that the first one came at the end of the function line and the last one aligned on the left with the beginning of the word "function." I also moved the var statements and the return statements so they were indented the same as three lines within the code block.
//I added a string to the return value and used interpolation to call argument values and the variables.
//Outside of the function, I added two console.log() statements that called the function and provided the argument values.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return `The average of ${num1} and ${num2} is ${avg}.`;
}
console.log(average(25, 75));
console.log(average(350, 276));