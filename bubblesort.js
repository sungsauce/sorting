// function bubbleSort(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     } 
// }
// let numSwaps = 0;

// function swap(arr) {
//     if (arr[0] < arr[1]) {
//         return arr;
//     } else {
//         numSwaps++
//         return [arr[1], arr[0]]
//     }
// }


// function bubbleSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     } else if (arr.length === 2) {
//         return swap(arr);
//     } else {
//         return bubbleSort(arr.slice(1))
//     }
// }



function bubbleSort(arr) {
    let swap = false;
    if (arr.length <= 1) {
        return arr;
    } 
  
    for (let i=0; i<arr.length; i++) {
        // debugger;
        if (arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i]= arr[i+1];
            arr[i+1] = temp;
            swap = true ;
            // console.log(arr);
        }
        // else {
        //     swap = false;
        // }
    } // end of looping through array
    debugger
    if (swap) {
        bubbleSort(arr.slice(0, -1));
    }
    return arr;
}
