class Isogram {

  checker(a){

    let word = a.split("");

    // have partnering iterations and compare the two 

    for (let i = 0; i < word.length; i++) {
        // console.log("outer iteration");
        // console.log(word[i]);

        for (var f = i; f < word.length; f++) {

            if (i != f) {

            if (word[i] == word[f]){
                //   console.log(word[i])
                //   console.log(word[f])
                  return false; 
             } else {
                 return true;
             }
        }

        // for(let f = 0; f < word.length; f++){
            // console.log("inner iteraction");
            // console.log(word[f]);
    
        //     if (word[i] != word[f]){
        //    // If the letter being iterated is not the same 
        //     // as the outer letter

             

        }

    }

    }




        // does the whole iteration inside the outer iteration, before 
        // returning back.  Sometimes this can be difficult to comprehend 
        // but useful after console-logging.


        // // console.log(word[i])
        // // console.log(word[i + 1])

        // }

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
