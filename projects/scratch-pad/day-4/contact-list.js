// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact = {
        'id': id,
        'nameFirst': nameFirst,
        'nameLast': nameLast
    }
    return contact;
} 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact)
        },
        findContact: function(fullName) {
            console.log('trigger this function')
            for (var i = 0; i <= contacts.length - 1; i++){
                var name = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
                if (fullName === name){
                    return contacts[i];
                }
            }               
        },
        /*
        
        */
        removeContact: function(contact){
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i] === contact){
                    return contacts.splice(i, 1);
                }
            }
        },
        /*
        i: n/a
        o: string of all contact names
        c: all contact full names must be separated by line break, but no line break after final name
        e: n/a
        */
        printAllContactNames: function(){
            // create array literal to contain all contact names
            let allContacts = [];
            //create for loop to iterate thru contacts
            for (var i = 0; i < contacts.length; i++){
                // access first and last name elements of each contact
                // combine the two names and store in new variable nameFull
                let nameFull = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
                //push nameFull variable into allContacts array
                allContacts.push(nameFull);
            }
            //convert allContacts to a string with all elements separated by line break and return that value
            return allContacts.join('\n');
        }
    }
}



// YOUR CODE GOES ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}


