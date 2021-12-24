
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var x='';
  for(let i = 0; i < num; i++){
    x= '#'+ x;
    console.log( x );
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // YOUR CODE GOES BELOW HERE //

  for (let i = 1; i <= 15; i++) {
      //use nested ternary operators for each condition required
      // if value is divisible by 5x3 console.log fizzbuzz
      (i % 15 == 0) ? console.log('fizzbuzz')
      // if divisible by 5 and not 3 log buzz
      : (i % 5 == 0) ? console.log('buzz')
      //if divisible by 3 and not 5 log fizz
      : (i % 3 == 0) ? console.log('fizz')
      // else log numeric value
      : console.log(i);
  }

  // YOUR CODE GOES ABOVE HERE //
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {    
  var chessBoard = "";
  var size = num;

  for (var lineCounter = 1; lineCounter <= size; lineCounter++) { 

      if (lineCounter%2 === 0) { 

//if lineCounter is an even number
      for (var charCounter = 1; charCounter <= size; charCounter++) {
          var evenOdd = (charCounter%2 === 0);
          switch (evenOdd) {
              case true:
                  (chessBoard += " ");
                  break;
              case false:
                  (chessBoard += "#");
                  break;
              }
          }                   
      }
  else { //if lineCounter is an odd number
      for (var charCounter = 1; charCounter <= size; charCounter++) {
          var evenOdd = (charCounter%2 === 0);
          switch (evenOdd) {
              case true:
                  (chessBoard += "#");
                  break;
              case false:
                  (chessBoard += " ");
                  break;
          }
          }                       
      }   
  chessBoard += "\n";
  }
  console.log(chessBoard);
  }

  ////////////////////////////////////////////////////////////////////////////////
  // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = {
      triangles,
      fizzBuzz,
      drawChessboard,
  };
}
