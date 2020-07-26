class Isogram {

    checker(str){

        // Turn all letters of the string to lower case and split it into an array. 
      
        var letters = str.toLowerCase().split('');
        var checkLetters = [];
        
        /* Check to see if the letter appears in the checkLetters array.
           If the letter is not already in the array it will push the letter into it. */
      
        letters.forEach(function(letter) {
          if(checkLetters.indexOf(letter) === -1) {
            checkLetters.push(letter);
          }
        });
      
        /* Now we have two arrays. If the letters array has non-duplicate letters then 
           it will be the same length as the checkLetters array. If not, the checkLetters array
           will be shorter. */
      
        /* Return true or false depending on whether the lengths of both arrays are equal */
          
        return letters.length === checkLetters.length ? true : false;
      
      }
    }




        // does the whole iteration inside the outer iteration, before 
        // returning back.  Sometimes this can be difficult to comprehend 
        // but useful after console-logging.


        // // console.log(word[i])
        // // console.log(word[i + 1])

        // }

module.exports = Isogram;



// class Person {

//     constructor(firstName, lastName){
//         this.firstName = firstname 
//         this.lastName = lastName 
//     }

//     fullName(){
//         return this.firstName + this.lastName ;
//     }
//  }
