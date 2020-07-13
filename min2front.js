

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
    //create a place holder for min hold position for min starting with sub 0
    var min = arr[0];
    // loop through array comparing with postion starting one

    for ( i=1; i<arr.length; ++i){
        if(arr[i]< min){
            console.log (arr[i]);
        // new condition if min is less the i then i is now min 
            var min = arr[i];
            
        }
        console.log (min);

    }

    for(i=arr[arr.length-1];i!=0;i--){
        arr[i] = arr[i-1];

    }



    // after loop is complete push array to right working from array-1 ending at array[1]

    arr[0]=min;
    return arr;

    // add array min to arr[0]  
}
var arr=[5,8,9,3]

console.log(minToFront(arr));