/**

 * Data Types:

 * 1. we use data types to be able to operate on variables, it is important to know something about the type.

 * 2. there are simple and complex data types

 * 3. simple data types are...

 * string, boolean, NaN, undefined, number and null

 * -they are atomic and immutable. they dont hold, collect or agregate other values.

 *  simple values return simple values, they dont alter the original value

 * -they also copy by value. when assigning or passing, simple data types are copied from one variable to another

 *  as long as they are simple and no more than 8 bytes in size

 * 4. complex data types are...

 * functions, objects and arrays

 * -they aggregate other values and can be of indefinite size

 * -when assigniing or passing, complex data types are passed by refrence.

 *  meaning the variable only contains the address where the data is stored.

 */

// string- characters inside quotation marks

var data = "string"; // => prints "string"

 

// number- any integer positive or negative

var num = 1; // => prints 1

 

// boolean- true or false are the only oplions

var truth = true; // => prints true

 

// NaN- not a number. prints NaN when a value isnt a number

NaN === NaN // => prints false

 

// null- The value null represents the intentional absence of any object value.

//      It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

var foo = null;

foo; // => prints null

 

// undefined- A variable that has not been assigned a value has the value undefined

var name; // => prints undefined

 

// boolean- Boolean represents a logical entity and can have two values: true and false

var age = 21;

if(age >= 20){

    return true;

}       // => prints true

 

// object- stores various keyed collections in no particular order by key/value pairs contained by {}

var me = {

    name: "Ryan",

    age: 33,

    tired: true

}; // me object with name key with "Ryan" string as value, age key with number value and tired key with a boolean value

 

// array- has indexed list

var friends = ["andrew", "michael", "dakota"];

// friends object with 3 properties with 3 indexes starting at andrew in the 0 index

 