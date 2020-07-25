// An isogram is a word that has no repeating letters, 
//consecutive or non-consecutive. Implement a 
// function that determines whether a string that contains
 //only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.


// plan: 

// whether a string is an isogram ----- true/false 

// input                  output 
// string                true or false 
// "a"                    true   
// "abcde"               true 
// "abCde"              true 
// "oOo"                 false 
// "OO"                  false 


const Isogram = require('./kata1.js')

describe('Isogram', () => {

    let word 

    // test('checker method returns a string', () => {

    //  word = new Isogram();

    // expect(word.checker("a")).toBe(true);
    // })



    // test('ignore upper/lowercase rules', () => {
    //     word = new Isogram();

    //     expect(word.checker("A")).toBe(true); 
    // })


    test('word is an isogram', () => {
        word = new Isogram();

        expect(word.checker("abc")).toBe(true)
    });



    test('word is not an isogram', () => {
        word = new Isogram();

        expect(word.checker("hello")).toBe(false)
    })


    test('word is not an isogram', () => {
        word = new Isogram();

        expect(word.checker("obobo")).toBe(false)
    })

})

