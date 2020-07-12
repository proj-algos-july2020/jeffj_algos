// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.


// function pushFront(arr, val){
//     newArr=[]
//     newArr[0]=val
//     for ( i=0;i<arr.length; i++){
//         newArr[i+1] = arr[i];
//     }
//         return newArr

// }
// var arr = [1,2,3,4]
// console.log (pushFront(arr, 5));


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popFront(arr){
//     firstIdx = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i+1];
//     }
//     arr.pop()
//     console.log(arr);
//     return firstIdx
// }
// console.log(popFront(arr));



// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, ind, val) {
//     newArr = []

//     for ( i=0;i<arr[ind-1]; i++)
//         newArr[i] = arr[i];
//     newArr.push(val);

//     for (i=ind;i<arr.length-1; i++)
//         newArr[i+1] = arr[i+1];

//     return newArr;
//     }
// var arr = [1,2,3,4,5]
// console.log(insertAt(arr,0,7));


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr,indx){
//     temp = arr[indx]
//     newArr = []
//     for ( i=0;i<arr[indx-1]; i++)
//        newArr[i] = arr[i];
//      newArr.pop;

//     for (i=indx;i<arr.length-1; i++)
//         newArr[i+1] = arr[i+1];
    
//     console.log(temp)
//     return newArr
// }

// var arr= [1,7,5,6,9]
// removeAt(arr,0)



// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// function swap(arr) {
//     if (arr.length%2 == 0) {
//         for (var x = 0; x < arr.length; x+=2) {
//             var temp = arr[x];
//             arr[x] = arr[x+1];
//             arr[x+1] = temp;
//         }
//     } else {
//         for (var x = 0; x < arr.length-1; x+=2) {
//             var temp = arr[x];
//             arr[x] = arr[x+1];
//             arr[x+1] = temp;
//         }
//     }
//     return arr;
// }



// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// function removeDups(arr){
//     newArr=[];

//     for (let i=0; i<arr.length-1; i ++){
//         if (arr[i] != arr[i+1]) {

//             newArr.push(arr[i]);
//         }
//     }
//     return newArr

// }

// var arr = [2,2,3,3,5,6,7,7,8,8];
// console.log(removeDups(arr));

// Second: Solve this without using any nested loops.