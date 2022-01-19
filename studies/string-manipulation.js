/**

 * string manipulation- Strings are useful for holding data in text form.  

 * there are diffrent ways of accessing and manipulating data in a string

 */

/*

 * 1. .length is one way of finding the length of a string in numerical form

 */

var string = 'hello world!';

console.log(string.length); // prints 12

/*

* 2. can use + operator to concatenate strings

*/

var str1 = "Good";

var str2 = "morning";

console.log(str1 + " " + str2); //=> prints "Good morning"

/*

*3. each string character has an index value which can be accessed using bracket notation

*/

var str = "dog";

console.log(str[1]); // ptints "o"

/*

* 4. 'string name'.length - 1 represents the last index in the string

*/

var str = "dog"

console.log(str.length - 1); // => prints 2

/*

* 5. .slice()-  extracts a part of a string and returns the extracted part in a new string.

*   The method takes 2 parameters: the start position, and the end position (end index exclusive)

*   omitting start parameter, slice will begin at first index; while omitting end parameter, will slice to end of string


*/

var str = "the dog is blue";

console.log(str.slice(4, 7)); // => prints 'dog' 

console.log(str.slice(4)); // => prints 'dog is blue'
//negative start values cause the slice to start from last index
console.log(str.slice(-7)); // => prints 'is blue' starting from the last index and moving 7 spaces to the left

/*

* 6. .substring() - similar to .slice() but:

*    The difference is that substring() cant accept negative indexes

*/

var str = "the blue dog";

console.log(str.substring(4, 8)); // => prints 'blue'

console.log(str.substring(4)) // => prints 'blue dog'
/*

* 7. .substr()- .substr() is similar to slice().

*    the difference is that the second parameter specifies the length of the extracted part.

*/

var str = "the dog is blue";

console.log(str.substr(4, 3)); // => prints 'dog'

/*

* 8. .replace()- The replace() method replaces a specified value with another value in a string:

*    it creates a new string and by default only replaces the first matching value found but ignores any duplicates that may come after

*/

let text = "nice weather";

let newText = text.replace("nice", "bad"); // => newText = "bad weather"

/*

* 9. .split()- strings can be converted to an array with the .split() method

*    If the separator is omitted, the returned array will contain the whole string in index [0].

*    If the separator is "", the returned array will be an array of single characters

*/

text.split(",")    // Split on commas

text.split(" ")    // Split on spaces

/*

* 10. .toUpperCase() & .toLowerCase()- changes letters to either case chosen. used in cases where

*   case sensitivity can be a concern

*/

var str = "dog";

str = str.toUpperCase();

console.log(str); // => prints 'DOG'

 