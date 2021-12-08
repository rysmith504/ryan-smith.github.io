// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

  //use for loop with stop condition set to when i < array.length to loop thru array logging sequentially each array[i] value
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //use for loop starting at array.length - 1 and stopping at zero and subtracting from i each time and logging each value sequentially
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //create array literal to contain object key values
  let arr = [];
  //use for in loop to push keys into array literal
  for (var key in object) {
    arr.push(key);
  }
  // return array now containing object keys
  return arr;  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //use for in loop to log object keys
  for (var key in object) {
    console.log(key);
  }      
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
    //create array literal to contain object key values
    let arr = [];
    //use for in loop to push key values into array literal
    for (var key in object) {
      arr.push(object[key]);
    }
    // return array now containing object values
    return arr;    
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
    //use for in loop to log object values
    for (var key in object) {
      console.log(object[key]);
    }        
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //create count variable set equal to 0
  let i = 0;
  // use for in loop to iterate through keys, increasing count variable by 1 each time
  for (var key in object) {
    i++;
  }
  // return updated count variable  
  return i;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // create array literal to store values
  const arr = [];
  // loop thru obj with for in loop, push each value into array literal
  for (var key in object) {
    arr.push(object[key]);
  }
  //use descending for loop to log reverse order of array indexes
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
