
/**loops:

 * 1. to perform a repetitive action, loops provide an efficient way to do this instead of doing it manually many times

 * 2. all loops essentially perform an action a specified amount of times

 * 3. For Loop - repeats until a specified condition evaluates to false

 * 4.For Loops & For in Loops - 
 */

 //a. For Loops - The initializing expression, if any, is executed.

 //     This expression usually initializes one or more loop counters, but the syntax allows

 //     an expression of any degree of complexity. This expression can also declare variables.

 //  *this is also considered the start coondition where the count or itteration will start

 //b. The conditionExpression expression is evaluated. If the value of conditionExpression is true,

 //     the loop statements execute. If the value of condition is false, the for loop terminates.

 //     (If the condition expression is omitted entirely, the condition is assumed to be true.)

 //  *this is the stop condition. as long as this statement is true, the loop will continue itterating.

 //c. The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.

 //d. If present, the update expression incrementExpression is executed.

 //  *this is the part that tells the loop by what increment to count/loop

 //e. the loop then returns to Step 2 as long as the stop condition has not been reached.

 

 var letters = ['a', 'b', 'c', 'd', 'e'];

 for(var i = 0; i < letters.length; i++){ // i has been declared and starts the loop at 0 and continues to length of the array by increments of 1

    console.log(letters[i]);               // prints =>    'a'

 }                                      //              'b'

                                        //              'c'

                                        //              'd'

                                        //              'e'

// example of for loop designed to move in reverse directions => prints to the console e, d, c, b, a
function reverseLetters(arr){
   for (var i = arr.length - 1; i > -1; i--){
      console.log(arr[i])
   }
}                                        

//a for in loop is good for looping through objects and accessing keys and values

// two steps to define a for loop: how will you define the key and what object do you want to loop over

//  key reference and object

 for(var key in object){

    //code to run

}

//While Loop - 
// uses 'while' keyword, while condition is true, code block will run within the while loop
//example: this will print 1, 2, 3, ... 20
var count = 0;
while(count <= 19) {
  count++
  console.log(count);
}