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


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
func makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }