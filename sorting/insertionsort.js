//insertion sort programming demo
//inplace sorting alogirthm - no extra array needed
//stable algorithm - similar items will stay in same order
//Time complexity - O(n^2)

let arr = [];
for(let i = 0; i<10; i++){
    arr.push(parseInt(Math.random() * 100) % 100);
}

console.log('_____Insertion Sort_____')
console.log('Original Array..');
console.log(arr);
console.log('Sorted Array..');
console.log(insertionSort(arr));


//define insertion sort function
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let temp = arr[i], j;
        for(j=i; j>0 && arr[j-1] > temp; j--){
            arr[j] = arr[j-1];
        }    
        arr[j] = temp;
    }
    return arr;
}