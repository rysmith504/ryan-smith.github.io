/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, nam){
    for (let i = 0; i < arr.length; i++){
        if (arr[i]['name'] === nam) {
            return arr[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(arry, namOb, repOb){
    for (let i = 0; i < arry.length; i++){
        if (arry[i]['name'] === namOb) {
            return arry[i] = repOb;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arry, nam){
    for (let i = 0; i < arry.length; i++){
        if (arry[i]['name'] === nam) {
            arry.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(arry, aniOb){
    for (let i = 0; i < arry.length; i++){
        if ((aniOb['name'] != arry[i]['name']) 
        && (aniOb['species'].length > 0 ) 
        && (aniOb['name'].length > 0)){
            return arry.push(aniOb);
        } else return;
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
