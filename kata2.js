// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


// My attempt:

class PhoneNumber {

   transform(a){

      var beginning = a.slice(0, 3).join("")      
      console.log(beginning);

      var middle = a.slice(3, 6).join("");
      // slices from index 3, until BUT NOT INCLUDING index 6 
      console.log(middle);

      var end = a.splice(6, 4).join("");
      // splice removes from the start position(6). The 4 represents the amount of indexes. 
      // It only adds on elements if you specify these additional elements in the brackets. 
      // e.g. to remove two elements in the array (at position index 2) and add 2, you can do .splice(2, 2, 3, 4)
      console.log(end);

      return( "(" + beginning + ") " + middle + "-" + end )
   }

}

// Another cooler and perhaps quicker way of doing this: 

// function createPhoneNumber(numbers){
//    var format = "(xxx) xxx-xxxx";
   
//    for(var i = 0; i < numbers.length; i++)
//    {
//      format = format.replace('x', numbers[i]);
//    }
// using the .replace method is really useful for quickly formatting this. 
   
//    return format;
//  }


module.exports = PhoneNumber;