// function bubbleSort(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     } 
// }


function bubbleSort(arr) {

    if (arr.length <= 1) {
        return arr;
    } else if (arr.length===2) {
       return (arr[0] > arr[1]) ? arr : ([arr[1], arr[0]]);
    }
}