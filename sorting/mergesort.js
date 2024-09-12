//mergesort is technique of breaking down and array into small array and merging them in a sorted manner
//not in-place sorting (new array memory is used)
//stable sort (as similar elements stays in the same order as original array)
//Time complexity: O(NlogN)
//merge-sort use divide and conquer technique


//create a random array
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random() * 100) % 100);
}

console.log('Original Array..');
console.log(arr);
console.log('Sorted Array..');
console.log(mergeSort(arr));

//create a function for mergesort
function mergeSort(arr) {
    //pick the middle index of the array
    let mIndex = parseInt(arr.length / 2);
    if (arr.length == 0 || arr.length == 1)
        return arr;

    let leftArr = arr.slice(0, mIndex);
    let rightArr = arr.slice(mIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

//define a merge function that merges two arrays in a sorted order
function merge(leftArr, rightArr) {
    let returnSortedArr = [];
    let i=0, j=0;
    while(i<leftArr.length && j<rightArr.length){
        if(leftArr[i] < rightArr[j]){
            returnSortedArr.push(leftArr[i]);
            i++;
        }
        else{
            returnSortedArr.push(rightArr[j]);
            j++;
        }
    }

    while(i<leftArr.length){
        returnSortedArr.push(leftArr[i]);
        i++;
    }
    while(j<rightArr.length){
        returnSortedArr.push(rightArr[j]);
        j++;
    }

    return returnSortedArr;
}