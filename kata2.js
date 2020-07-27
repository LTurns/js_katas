

class PhoneNumber {

   transform(a){

      var beginning = a.slice(0, 3).join("")      
      console.log(beginning);

      var middle = a.slice(3, 6).join("");
      console.log(middle);

      var end = a.splice(6, 4).join("");
      console.log(end);

      return( "(" + beginning + ") " + middle + "-" + end )
   }

}


module.exports = PhoneNumber;