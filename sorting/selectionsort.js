//creating random array using Math.Random
let arr = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt((Math.random() * 100) % 100);
    arr.push(num);
}


console.log('_____Technique: Selection Sort _____');
console.log('Original Array..');
console.log(arr);
console.log('Sorted Array..');
console.log(selectionSort(arr));


//function definition for selection Sort
function selectionSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let maxIndex = 0;
        for (let j = 0; j <= i; j++) {
            if (arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
    return arr;
}

/* Sample Output:


*/