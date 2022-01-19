
/**functions:

 * 1. A function is a keyword that when invoked, runs a specified block of code

 * 2. it should also take some input and return an output where there is some obvious relationship

 *    between the input and the output.

 * 3. To use a function, you must define it somewhere in the scope from which you wish to call it.

 *

 ***  A function definition (also called a function declaration, or function statement) consists of

 * a.  the function keyword, followed by:

 * b.  The name of the function.

 * c.  function parameters - place holders to be replaced by arguments when the function is called

 * -Function arguments are the values received by the function when it is invoked.

 * The code inside the function will execute when the function is called:

 * -When an event occurs 

 * -When it is invoked by code

 * -Automatically 

 *  -Inside the function, the arguments (the parameters) behave as local variables.

 *  -so when the function is first defined, the parentheses contain the parameters and can be as many as needed

 * d.  The code block containing the function definition are enclosed in braces {...}

 * Function Return

   //When JavaScript reaches a return statement, the function will stop executing.

   //If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

 

 Example

Calculate the product of two numbers, and return the result:

 



 
*/
function myFunction(a, b) {
 // Function returns the product of a and b
  return a * b;            
}

// x is initialized with function call.  return value =4; will be value of x;
let x = myFunction(2, 2);  

 

 
/*
Functions often compute a return value. The return value is "returned" back to the "caller":

 *     ...For example, the following code defines a simple function named half

 */

function half(number) {

    return number /= 2;

  }

  /**  ^^^^^^^^^^^^^^^^^^^

   * The function named square takes one parameter, called number.

   * The function has one statement that says to

   * return the parameter of the function (number) divided by 2.

   * the return statement represents the value calculated when the function is called:

   */

  // arrow funtion is a shorter syntax for a function expression

  var x2 = (num) => {

    num * 2;

  };

 

  //x2 is the name of the function, num is the parameter, the function keyword is removed and replaced with =>

  //then the brace for your code block with num multiplied by 2

 

  //if the function has only one expression, you can omit the braces and the return keyword

  //also if it only has one parameter, it can be shortened to one line of code sans parantheses
 

  var doubler = num => num * 2;

  /**

   *  Defining it names the function and specifies what to do when the function is called.

   *  Calling the function actually is what actually executes the code within the function.  

   *  here is an example of calling function x2:

   */

   x2(9); // 9 * 2 = 18 => result would be 18

   console.log(x2(9)); // => prints 18

 

  /**

   * anonymous function - a function without a specified name.

   * the function x2 could have been defined as:

   */

   const x2 = function(number) {

       return number * 2

    }

   var x = x2(4) // x gets the value 8

   /**

    * Function expressions are also good when passing a function as an argument to another function.

    * The next example shows a map function that receives a function as first argument and an array as second argument

    */

    function map(func, array) {
        
        //initialize input array literal

        let result = []; 
        //loop thru array parameter
        for (var i = 0; i <= array.length; i++) 
            //push each index into result array with function acting on each index value
          result.push(func(array[i])); 
        return result;
      }

 

 

      /**scopes and closure

       * scope: The current context of execution. The context in which values and expressions are "visible"

       * or can be referenced. If a variable or other expression is not "in the current scope,"

       * then it is unavailable for use. Scopes can also be layered in a hierarchy,

       * so that child scopes have access to parent scopes, but not vice versa.

       *

       * closure: A function serves as a closure in JavaScript, and thus creates a scope, so that

       * (for example) a variable defined exclusively within the function cannot be accessed from outside

       * the function or within other functions. For instance, the following is invalid:

       */

       function exampleFunction() {

        var x = "declared inside function";  // x can only be used in exampleFunction

        console.log("Inside function");

        console.log(x);

    }

   

    console.log(x);  // Causes error

 

    //However, the following code is valid due to the variable being declared outside the function, making it global:

 

    var x = "declared outside function";

 

exampleFunction();

 

function exampleFunction() {

    console.log("Inside function");

    console.log(x);

}

 

console.log("Outside function");

console.log(x);