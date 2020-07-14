// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

// function removeBlanks(str){
//     return str.split(" ").join("");
// }

// var str=(" Pl ayTha tF u nkyM usi c ");
// console.log (removeBlanks(str))


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

// function getDigits(str){
//     var newStr= "";
//     var arr=str.split("");
    

//     for (let i = 0; i<arr.length; i++){

//         if (arr[i]%1 ==0){            
//             newStr += arr[i];

//         }
//     console.log (newStr);

//     }

//     return newStr

// }


// var str=("0s1a3y5w7h9a2t4?6!8?0")
// console.log(getDigits(str))



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// var str = "Live from New York, it's Saturday Night!"


// function acronym(str){
//     var arr=str.split(" ");
//     var newStr= ""; 
//     for (let i =0 ; i<arr.length; i++){
//         var word = arr [i].split("");
//         newStr += word[0].toUpperCase()
//     }
//     return newStr


// }

// console.log(acronym(str))




// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

/* take string compress and return value of length */

// var str = "Honey pie, you are driving me crazy"
// function noSpace(str){
//     var arr =str.split(" ");
//     var newStr = arr.join("");
//     console.log(newStr); 
//     return newStr.length;
// }

// console.log(noSpace(str));



// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

var str = "we are beyond the beyond"

function shortString(str, val){
    newArr = []
    var strArr =str.split(" ");
        for (let i = 0; i <val; i++){
            newArr[i] = strArr[i];
            
    }
    return newArr.join(" ");

}

console.log(shortString(str, 2));