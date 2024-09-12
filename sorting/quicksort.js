let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random() * 100) % 100);
}
console.log('_____Quick Sort_____');
console.log('Original Array..');
console.log(arr);
console.log('Sorted Array..');
console.log(quickSort(arr));

//4, 2
function quickSort(arr) {
    if(arr.length == 0 || arr.length == 1){
        return arr;
    }
    //pick a pivot element
    let arrLength = arr.length;
    let pivotIndx = arrLength - 1;
    let pivotElem = arr[pivotIndx];

    let leftPtr = 0, rightPtr = pivotIndx;

    while (leftPtr < rightPtr) {
        while (arr[leftPtr] < pivotElem && leftPtr < rightPtr)
            leftPtr++;

        while (arr[rightPtr] >= pivotElem && leftPtr < rightPtr)
            rightPtr--;

        let temp = arr[leftPtr];
        arr[leftPtr] = arr[rightPtr];
        arr[rightPtr] = temp;
    }
    return ([]).concat(quickSort(arr.slice(0, leftPtr)), pivotElem, quickSort(arr.slice(rightPtr, pivotIndx)));
}