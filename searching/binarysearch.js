//binary search is a technique applied on a sorted array to find an element
//it's a recursive technique where we need to break array into two halves and keep searching for the element in th half that's in the range of search element
//Time complexity: O(logN)

let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(parseInt(Math.random() * 100) % 100);
}
arr.sort((a,b) => {return a-b;});
console.log('Input array..');
console.log(arr);

let randomNum = parseInt(Math.random()*100)%100;
console.log(`Search element is ${randomNum}`);
console.log(`${randomNum} is found at the index ${binarySearch(arr, randomNum, 0, arr.length)}`);


function binarySearch(arr, searchNum, startPosition, endPosition){
    if(arr.length == 0 || startPosition == endPosition)
        return -1;

    let midIndex = parseInt((startPosition + endPosition)/2);

    if(searchNum == arr[midIndex])
        return midIndex;
    else if(searchNum < arr[midIndex]){
       return binarySearch(arr, searchNum, 0, midIndex); 
    }
    else{
        return binarySearch(arr, searchNum, midIndex+1, endPosition);
    }

}