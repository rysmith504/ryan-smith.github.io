// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./ryan-smith.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(cust){
        if(cust.gender === 'male'){
            return true;
        } else {
            return false;
        }
    })
    return males.length;
    };

var femaleCount = function(array) {
    let females = _.reduce(array, function(acc, curr){
        if(curr.gender === 'female'){
            acc++;
        }
        return acc;
    }, 0);
    return females;
};

var oldestCustomer = function(array) {   
    var largest = 0;
    for (let i = 0; i < array.length; i++) {
        var elements = array[i].age;
        if (elements > largest) {
        largest = elements;
        var oldest = array[i].name
        }
    }
return oldest;
};

var youngestCustomer = function(array) {   
    var largest = Infinity;
    for (let i = 0; i < array.length; i++) {
        var elements = array[i].age;
        if (elements < largest) {
        largest = elements;
        var youngest = array[i].name
        }
    }
return youngest;
};

var averageBalance = function(array) {
    var totBal = 0;
    for (let i = 0; i < array.length; i++){
        let newBal = array[i].balance
        var numBal = Number(newBal.replace(/[^0-9.-]+/g,""));
        totBal += numBal;
    }
    return totBal / array.length;
};

var firstLetterCount = function(array, letter) {
    let count = 0;
    let upperLetter = letter.toUpperCase() 
    for (let i = 0; i < array.length; i++) {
        let nameStr = array[i].name[0].toUpperCase(); 
        if (nameStr === upperLetter) {
            count++
        }
    }
    return count;
};

var friendFirstLetterCount = function(array, cust, letter) {
    let count = 0;
    let upperLetter = letter.toUpperCase(); 
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === cust){
            var custArr = array[i].friends;
        }
    }    
    for (let j = 0; j < custArr.length; j++){
        let nameStr = custArr[j].name[0].toUpperCase(); 
        if (nameStr === upperLetter) {
            count++
        }
    }
    return count;
};

var friendsCount = function(array, customer) { 
    const mutuals = (array.filter(entry => entry.friends.some(item => item.name.includes(customer))));
    let mutuals2 = []
    for (var i = 0; i < mutuals.length; i++){
      mutuals2.push(mutuals[i].name)
    }
    return mutuals2
  };

  var topThreeTags = function(array) {
    let objArray = []
     let objectCount = array.map(function(personObj){
          return personObj.tags
      }).reduce(function(acc, curr) {
          return acc.concat(curr)
      }).reduce(function(acc, curr) {
          if (!acc[curr]) {
              acc[curr] = 1
          } else {
              acc[curr]++
          }
          return acc;
      }, {})
    for (let key in objectCount) {
      let newObj = {}
      newObj.name = key;
      newObj.count = objectCount[key]
      objArray.push(newObj)
    } 
  let newArray = objArray.sort(function(a,b){
    return b.count - a.count;
  }).slice(0,3)
  let top3Tags = newArray.map(tag => tag.name)
  return top3Tags
  };
  
  var genderCount = array => array.map(person => 
    person.gender).reduce((genderObj, num) => {
    if (!genderObj[num]) {
      genderObj[num] = 1
    } else {
      genderObj[num] += 1
    }
    return genderObj
  },{})

function genderCount(array) {
    return array.map(person => person.gender).reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
