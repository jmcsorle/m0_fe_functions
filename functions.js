// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    var friendHello = "Hello, friend!";
    return friendHello;
  }
  console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(friend) {
    var customHello = `Hello, ${friend}!`;
    return customHello;
 }
 console.log(customGreeting("Sharron"));
 console.log(customGreeting("Laura"));
 console.log(customGreeting("Teenya"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    var fullName = `Hello, ${firstName} ${middleName} ${lastName}!`;
    return fullName;
  }
  console.log(greetPerson("Caleb", "Scott", "McSorley"));
  console.log(greetPerson("Hayden", "Robert", "McSorley"));
  console.log(greetPerson("Logan", "Celeste", "McSorley"));


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(number) {
    //var squared = `${number} squared = ${number} * ${number}.`;
    var squaredNum = number * number
    return `If you square the number ${number}, the answer is ${squaredNum}.`;
  }
  console.log(square(5));
  console.log(square(10));
  console.log(square(8));


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock(stockValue, item) {
    if (`${stockValue}` >= 4) {
      console.log(`${item} is stocked.`);
      }
    else if(`${stockValue}` < 4 && `${stockValue}` >= 1) {
      console.log(`${item} - running LOW.`);
        }
    else {
      console.log(`${item} - OUT of stock!`);
    }
  }
  (checkStock(4, "Coffee"));
  (checkStock(3, "Tortillas"));
  (checkStock(0, "Cheese"));
  (checkStock(1, "Salsa"));