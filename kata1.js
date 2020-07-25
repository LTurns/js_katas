class Isogram {

  checker(a){

    let word = a.split("");

    for (let i = 0; i < word.length; i++) {
        console.log(word[i])
        console.log(word[i + 1])
        if (word[i] !== word[i + 1]) {
            return true;
        } else {
            return false;
        }
        
    }

    return true;
  }

}

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
