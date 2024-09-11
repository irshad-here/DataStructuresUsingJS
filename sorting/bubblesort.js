//bubblesort is technique in which the maximum (or minimum for descending order) number during each iteration moved to end of the array
//time complexity = O(n^2)


let bubbleSort = (arr, order) => {
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if((order == 'asc' && arr[i] > arr[j]) || (order == 'desc' && arr[i] < arr[j])){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

//creating random array using Math.Random
let arr = [];
for(let i=0; i<10; i++){
    let num = parseInt((Math.random() * 100) % 100);
    arr.push(num);
}


console.log('_____Technique: Bubble Sort _____');
console.log('Original Array..');
console.log(arr);
console.log('Sorted Array (Ascending)..');
console.log(bubbleSort(arr, 'asc'));
console.log('Sorted Array (Descending)..');
console.log(bubbleSort(arr, 'desc'));

/*Sample Output

_____Technique: Bubble Sort _____
Original Array..
[
  16, 31, 98,  5, 76,
   9, 36,  2, 69, 72
]
Sorted Array (Ascending)..
[
   2,  5,  9, 16, 31,
  36, 69, 72, 76, 98
]
Sorted Array (Descending)..
[
  98, 76, 72, 69, 36,
  31, 16,  9,  5,  2
]
*/