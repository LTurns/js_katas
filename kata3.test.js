// Digital root is the recursive sum of all the digits in a number.

const Sum = require("./kata3")

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 =  11



describe('Sum', ()  => {

    var sum

    test('output value is equal to 1', () => {
        sum = new Sum;
        expect(sum.add(1)).toEqual(1);        
    })

    test('input value is equal to 2', () => {
        sum = new Sum; 
        expect(sum.add(11)).toEqual(2);
    })

    test('output value is equal to 7', () => {
        sum = new Sum;
        expect(sum.add(16)).toEqual(7);        
    })

    test('input continues iterating when reaching double digits', () => {
        sum = new Sum;
        expect(sum.add(493193)).toEqual(11); 
    });
})