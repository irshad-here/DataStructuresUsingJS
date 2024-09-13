
//below variable is to track the number of function calls
var functionCallCounter = 0;

//factorial function that doesn't use dynamic programming
function factorialNonDynamic(num) {
    functionCallCounter++;
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    else
        return num * factorialNonDynamic(num - 1);
}

console.log('calling non-dynamic factorial function..')
console.log(factorialNonDynamic(5));
console.log(factorialNonDynamic(6));
console.log(factorialNonDynamic(7));
console.log(`total recursive calls made: ${functionCallCounter}`);

//factorial function using dynamic programming (memoization)

//declaring a memory obj
var memoryObj = {};
memoryObj[0] = 0;
memoryObj[1] = 1;

//setting function call counter to
functionCallCounter = 0;

function factorialDynamic(num) {
    functionCallCounter++;
    if (memoryObj[num])
        return memoryObj[num];
    else {
        memoryObj[num] = num * factorialDynamic(num - 1);
        return memoryObj[num];
    }
}


console.log('calling dynamic factorial function..');
console.log(factorialDynamic(5));
console.log(factorialDynamic(6));
console.log(factorialDynamic(7));
console.log(`total recursive calls made: ${functionCallCounter}`);

//using dynamic programming total number of recursive calls made can be reduced drastically.