// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    /*
    i: two integer values
    o: return array of all integer values between the inputs, inclusively and in numerical order
    c: create array to collect outputs to be returned, use a loop, and .push
    e: start value is first index; end value is last index
    */
    // create array literal to store integer values
    const arr = [];
    // use if else if statement for when start is greater than end, vice versa, and equal
    if (start > end) {
        // when start is greater than end, integer values should count down
        for (let i = start; i >= end; i--) {
            // use .push to add integer values of i to the array
            arr.push(i);
        }
        //opposite scenario
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        // else statement covers when start and end are equal, simply log the start integer
    } else {
        arr.push(start);
    }
    //return updated array
    return arr;
    
        // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
