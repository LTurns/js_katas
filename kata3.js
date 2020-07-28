// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 =  11



function sumDigits(num) {

    var numStr = num.toString()
    var numArr = numStr.split('').map(Number);
  
    function sumHelper(arr) {
      // Base case:
      if (arr.length === 1) {
        return arr[0];
      }
  
      // Otherwise recurse (return last number plus the sum
      // of the remainder):
      return arr.pop() + sumHelper(arr);
    }
  
    // Then use that recursive helper:
    return sumHelper(numArr);
  }
  
  console.log(sumDigits(1234))

// class Sum {

//     add(a) {

//     var digits = a.toString().split("").map(Number);

//     if (digits.length > 1){
//         var sum = digits.reduce(function(a, b){
//            var result = (a + b);

//            if (result.toString().split("").map(Number).length > 1){
//             var addition = result.reduce(function(a, b){
//                 return (total = (a + b));
//            });

//         } else {
//                return(sum);
//            }

//         });
//     }












    // for (var i = 0; i < digits.length; i ++){

    //         if (digits.length > 1) {
    //             console.log("input as an array");
    //             console.log(digits);

    //             console.log(digits[i] + digits[i]);
                
                
            
    //             var total = (digits[i] + digits[i]).toString().split("").map(Number);
    //              console.log("total on input as an array");
        

    //           if (total.length > 1) {
    //               console.log("answer");
    //               console.log(total[i] + total[i]);
    //               return (total[i] + total[i]);
    //           } else {
    //             console.log("answer");
    //               console.log(total[i]);
    //               return (total[i]);
    //           }

    //         } else {
    //             console.log("answer");
    //             console.log(digits[i])
    //             return(digits[i]);
    //         }
    //     }
    // }
}

}


module.exports = Sum;