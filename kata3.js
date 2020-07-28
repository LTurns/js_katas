// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 =  11


class Sum {

    add(a) {
    var digits = a.toString().split("").map(Number);

    if (digits.length = 1){
        console.log(a);
        return (a);
    } else {
        digits.forEach(function (item) {
            console.log(item += item);
          });
    }

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