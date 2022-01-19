/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. constants
// the value of a constant cannot change once initialized
 const NAME = 'Ryan';
 const NAME = 'Dave';
 //SyntaxError: Identifier 'NAME' has already been declared
//constants are block scoped.  
// this means they are not hoisted outside of the block of code in which they are initialized
function forecast(weather){
    if(weather === 'sunny'){
      const msg = 'nice day'; //prints 'nice day'
    } else {
      const msg = 'bad weather';
      console.log(msg); //prints 'bad weather'
    }
    // console.log(msg); // this would print referenceerror 'msg is not defined'
}
 
  forecast('sunny');
  
// 5. lets
// can be declared without initialization; block scoped local variable
console.log(outside); // prints undefined, because variable is hoisted to the top, but not yet initialized
console.log(inside); // prints referror; inside is not defined, because lets are locally scoped
const city = 'nola';
if(city === 'nola'){
//   console.log(inside); // prints reference error; cannot access 'inside' before initialization, not hoisted like vars
  var outside = 'foo'
  // let inside = 'bar';
  //console.log(inside) // prints 'bar'
}

//6. Hoisting
/*
before statements of a program are executed, all var and function declarations are dragged up to the top of the program (hoisted)

var values do not throw referrors, instead say undef.  only the declaraions not the init is brought to top

var and let values can be reassigned; const variables cant

*/

function double(num){
  console.log(num * 2)
}

double(five); // => returns NaN because while 'five' declaration is hoisted to the top, the initialization is not
var five = 5;

/*
block scoped - let and const are only accessible inside the code block in which they are initialized
function scoped - var values will be stuck in the scope of a function but will not be stuck in the scope of an if or a for/while loop
*/