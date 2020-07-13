// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr) {




    // run loop starting at i since is a number have it increament one side but minus on the other note to end loop half way through array
    for(let i=0; i != arr.length/2;i++){
            // create a place holder for last indx
        let tempIndex = arr[arr.length-1-i]
        console.log(tempIndex)
          // change last indx to indx[0]
      arr[arr.length-1-i]=  arr[i];
  
    //place holder moves to position 
    arr[i]=tempIndex;
    }

    console.log(arr)




}
var arr = [6,5,4,3,2,1]

console.log (reverse(arr));


// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// function rotateArr(arr, shiftBy){

// // creat a temp value to hold last postition
//     var temp = arr[arr.length-1]
//     // console.log(temp)

//     for (let i = arr[arr.length-1]; i > 0; i--){
//         console.log(i)

//         arr[i] = arr[i-shiftBy];
//         console.log(arr)
       
//     }
//     arr.pop()
//     arr[0]=temp
//     return arr;

// }

// var arr = [1,2,3]
// console.log(rotateArr(arr,1));

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// var arr =[5,3,7,8,1,6,4]

// function minMax(arr, min, max) {
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] > min && arr[i] < max) {
// 			for(let j = i; j < arr.length - 1; j++) {
//                 arr[j] = arr[j + 1];
//             }
//             arr.length = arr.length - 1;
// 			i--;
// 		}
//     }
//     return arr
// }
// console.log(minMax(arr, 2, 8))


