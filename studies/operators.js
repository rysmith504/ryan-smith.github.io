////

 // operators

 // operators act on our data, i.e. assign them or compare them or include them in math operations

 //

 // 1. assignment operators- =, +=, -=, *=, /=, %=, **= 

 // = assigns the left operand to the right, all the others are compound assignment operators

 //   that are shorthand for the operations listed

 //

 let x = 4; // => assigns the value of 4 to x
 
 x += 3 // => x = 7
 
  
 
 // 2. comparison operators- ===, !==, >=, <=, <, >
 
 // comparison operator compares its operands and returns a logical value based
 
 // on whether the comparison is true
 
 //
 
 console.log(1 === 1) // 1 is strictly equal to 1. => prints true
 
 console.log(2 !== 1) // 2 is not equal to 1. => prints true
 
 console.log(1 > 2) // 1 is not grater than 2. => prints false
 
  
 
 // 3. logical operators && - 'and' operator(both conditions have to be true) || - 'or' operator (only one of the conditions have to be true) !('bang' operator, used to find if something is not whats declared)
 
 // Logical operators are typically used with Boolean (logical) values; when they are, they return
 
 // a Boolean value. However, the && and || operators actually return the value of one of the specified operands
 
 //
 
 x = 1;
 
 y = 2;
 
 if(x === 1 || y === 3){
 
     return true;        // returns true because x = 1 even though y doesnt = 3
 
 }
 
  
 
 // 4. arithmetic operators: +, -, //, /
 
 // An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value
 
 //
 
 console.log(1 - 1) // prints 0
 
  
 
 ////
 
  //  5. unarary operators- A unary operator is an operator with only one operand.
 
  //  ex: ++, --
 
  //
 let z = 5
    console.log(++z) // adds 1 to 5; output: 6
    console.log(--z) // subtracts 1 from 6; output: 5
 
  
 
  ////
 
   //  6. ternary operator-is the only JavaScript operator that takes at least three operands.
 
   //     The operator can have two or more values based on a condition(s). The syntax is:
 
   //
 
   //     condition ? val1 : val2

   //     or with more than 1 condition:

        // condition1 ? val1
        // : condition2 ? val2
        // : condition3 ? val3
        // : val4

 
   //     If condition is true, val1 is returned. if false, val2 is returned.
 
   //     You can use the conditional operator anywhere you would use a standard operator.
 
   //
 
   var citizen = (age >= 65) ? 'senior' : 'major';
 
  
 
   //This statement assigns the value "senior" to the variable status if age is eighteen or more.
 
   //Otherwise, it assigns the value "major" to citizen.