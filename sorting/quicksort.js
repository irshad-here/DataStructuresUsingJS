//quick sort uses divide and conquer technique
//a pivot element is selected and placed at such position, where the left elements are smaller than pivot
    //and the right-side elements are greater than pivot element
    //and the left and right arrays are again rant through the same logic till the arrays are broken down in to single (or empty) item array
    //and all results are merged to create the return result

//Time complexity: O(NlogN)

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random() * 100) % 100);
}
console.log('_____Quick Sort_____');
console.log('Original Array..');
console.log(arr);
console.log('Sorted Array..');
console.log(quickSort(arr));

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

    //Array.slice(begin, end) selects the array from begin index upto the end index (end index element not included in result)
    //in the below recursive call arg1: left arr with all elemnts less that pivotElem; pivotElem is the selected pivot element
        //arg3: right arr with all elements reater than pivot element
    return ([]).concat(quickSort(arr.slice(0, leftPtr)), pivotElem, quickSort(arr.slice(rightPtr, pivotIndx)));
}