// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
//"Hello World".toLowerCase();
//The following code defines a function that returns the value of a variable named "hello." The console.log command calls the methodTest1 function and applies the toLowerCase() method to it to change all of the letters in the value of "hello" to lowercase.
function methodTest1() {
    //This is test number 1 to show what the toLowerCase method will do.
      var hello = "Hello World!"
      return hello
    }
    console.log(methodTest1().toLowerCase())


//"Hello World".includes("Hello");
//The following code defines a function that returns the value of a variable named "hello." The console.log command calls the methodTest2 function and applies the includes() method to it with an argument of "Hello". Because the value of the variable "hello" includes the word, "Hello", which is the argument for the includes() method, the boolean value of "true" is returned and printed to the console.
function methodTest2() {
    //This is test number 2 for the includes method.
   var hello = "Hello World"
   return hello
}
console.log(methodTest2().includes("Hello"));

//"Hello World".endsWith("Hello");
//The following code defines a function that returns the value of a variable named "hello." The console.log command calls the methodTest3 function and applies the endsWith() method to it with an argument of "Hello". Because the value of the variable "hello" does not end with the word, "Hello", which is the argument for the endsWith() method, the boolean value of "false" is returned and printed to the console.

function methodTest3() {
    //This is test number 3 for the endsWith() method."
   var hello = "Hello World"
   return hello
 }
console.log(methodTest3().endsWith("Hello"));


//"Hello World".endsWith("rld");
//The following code defines a function that returns the value of a variable named "hello." The console.log command calls the methodTest4 function and applies the endsWith() method to it with an argument of "rld". Because the value of the variable "hello" ends with the letters, "rld", which is the argument for the endsWith() method, the boolean value of "tru" is returned and printed to the console.

function methodTest4() {
    //"This is test number 4. We are testing the endsWith() method again with a different argument. 
    var hello = "Hello World"
    return hello
   }
  console.log(methodTest4().endsWith("rld"));


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
// var firstName = "Jeff";
// console.log(firstName.startsWith("J"));


var dogsRule = "Dogs are truly man's best friend!";
var catsDrool = "Wake up, people! Cats are plotting to annihilate mankind.";

//The following code applies the `+` operator to concatenate the values for variables, "dogsRule" and "catsDrool and adds a space inbetween them and prints the result to the console.
console.log(dogsRule + " " + catsDrool);

//The following code applies the `charAt()` method to the catsDrool variable and prints the value of the 17th character to the console.
console.log(catsDrool.charAt(17));

//The following code applies the `toUpperCase()` method to the dogsRule variable and changes all of the letters to uppercase. 
console.log(dogsRule.toUpperCase());


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var siblings = ["Jim", "Georgia", "Bruce", "Mike"];
//The following code applies the `push()` method to the siblings array and adds "Bonnie" as a new element of the end of the array. It returns the new element count to the screen. The next line prints the siblings array to the scren to show that "Bonnie" is now listed at the end of the array
console.log(siblings.push("Bonnie"));
console.log(siblings);


var ages = [69, 68, 66, 64, 50];
//The following code applies the `slice()` method to the ages array. It prints the value of elements 0, 1, and 2 to the console because slice returns the value of the starting element value and all of the values up to the element number listed as the ending number in the argument. It does not return the value of the ending element in the argument.
console.log(ages.slice(0, 3));
