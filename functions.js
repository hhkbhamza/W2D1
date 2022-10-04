/**
 * Functions Continued
 * 

Things to remember
* DRY - Don't Repeat Yourself 
* Good input (Garbage in garbage out)
*/

// 2 Ways to write a function

// Function Declaration
  //function declarations will be hoisted to the top.

  function sayHello (name) {
    console.log("Hello " + name + "!")
  }
  
  //sayHello("Toby")
  
  
  // Function Expression
  
  
  const sayHelloAgain = function (name) {
    if (typeof name !== "string" ) {
      console.log("Input was not a string, Try again")
      return
    }
    console.log("Hello " + name + "!")
  }
  
  //sayHelloAgain(20)
  
  // Arrow Functions
  // With an example of default parameters
  
  const add = (num1 = 10, num2 = 15, num3 = 5) => num1 + num2 + num3
  
  //console.log(add(70, 15, 30))
  function areBothEven(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      console.log("is not a number")
      return null
    } else {
      return !(n1 % 2) && !(n2 % 2);
    }
  }
  // 0 - falsey
  // anything that isn't zero is truthy
  // "christina" - truthy
  // "" - falsey
  
    // Example of truthy and falsey in a real scerniao
  // const arr = []
  
  // if (arr.length) {
  //   console.log("I have elements!!")
  // } else {
  //   console.log("i'm empty:(")
  // }
  
  
  console.log(areBothEven(2, 8))