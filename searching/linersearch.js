let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(parseInt(Math.random() * 100) % 100);
}

console.log('Input array..');
console.log(arr);
let randomNum = parseInt(Math.random()*100)%100;
console.log(`Search element is ${randomNum}`);
console.log(`${randomNum} is found at the index ${linearSearch(arr, randomNum)}`);

//liner search function search for the matching element in a sequence order
//If the search element is found, function return the index value of the matching element
//If the elemnet is not found, -1 is returned
//Time complexity is O(n)

function linearSearch(arr, searchNum) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == searchNum) {
            return i;
        }
    }
    return -1;
}