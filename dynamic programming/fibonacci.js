//fibinacci series function using dynamic programming (recursive)

//declare a memory object
var memoryObj = {};
//setting the initial values for memoryObj, which is needed for base (breaking condition for stopping the recursive call)
memoryObj[0] = 0;
memoryObj[1] = 1;
//initializing function call counter
var fCallCounter = 0;
//  0   1   1   2   3

function fibonacci(n){
    fCallCounter++;

    if(memoryObj[n] || memoryObj[n] === 0){
        return memoryObj[n];
    }
    else{
        memoryObj[n] = fibonacci(n-1) + fibonacci(n-2);
        return memoryObj[n]; 
    }
}

console.log('calling fibonacci (dynamic programming) function 1st time..');
console.log(`5th fibonacci number is ${fibonacci(5)}`);
console.log(`Total recursive calls made: ${fCallCounter}`);

//resetting function call counter
fCallCounter = 0;
console.log('calling fibonacci (dynamic programming) function 2nd time..');
console.log(`5th fibonacci number is ${fibonacci(5)}`);
console.log(`Total recursive calls made: ${fCallCounter}`);
//after calling fibonacci function function for the same number again, total recursive function calls are reduced to 1