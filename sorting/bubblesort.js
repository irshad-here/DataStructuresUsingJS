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


let arr = [];
for(let i=0; i<10; i++){
    let num = parseInt((Math.random() * 100) % 100);
    arr.push(num);
}

console.log(arr);
console.log(bubbleSort(arr, 'asc'));
console.log(bubbleSort(arr, 'desc'));