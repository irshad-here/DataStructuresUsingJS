//fibonacci and tribonacci using recursion

//nth fibonacci using recursion
let fibonacci = (n) => {
    if (n == 0 || n == 1)
        return n;
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};


//nth tribonacci using recursion
let tribonacci = (n) => {
    if (n == 0 || n == 1 || n == 2) {
        return n;
    }
    else {
        return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    }
}


console.log(fibonacci(4));
console.log(tribonacci(5));