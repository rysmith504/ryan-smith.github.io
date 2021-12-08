// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for (let i = 1; i <= 100; i++) {
        //use nested ternary operators for each condition required
        // if value is divisible by 5x3 console.log fizzbuzz
        (i % 15 == 0) ? console.log('FizzBuzz')
        // if divisible by 5 and not 3 log buzz
        : (i % 5 == 0) ? console.log('Buzz')
        //if divisible by 3 and not 5 log fizz
        : (i % 3 == 0) ? console.log('Fizz')
        // else log numeric value
        : console.log(i);
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}