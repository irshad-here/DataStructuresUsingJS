//number operations using recursion

//***************************
//product using recursion
let product = (m, n) => {
    //below step needed to reduce number of recursive call
    if (m < n) {
        return product(n, m);
    }
    else if (n == 1) {
        return m;
    }
    else {
        return m + product(m, n - 1);
    }
};

console.log(`product of 4 and 5 is ${product(4, 5)}`);

//***************************
//nth power of a number
let power = (m, n) => {
    if (m < n) {
        power(n, m);
    }
    if (n == 0) {
        return 1;
    }
    else if (n == 1) {
        return m;
    }
    else {
        return m * power(m, n - 1);
    }
}

console.log(`3 to the power of 4 is ${power(3, 4)}`);

//***************************
//digit count in a given number using recursion
let digitCount = (n) => {
    if (n == 0)
        return 0;
    else
        return 1 + digitCount(parseInt(n / 10));
}

console.log(`count of digits in number 33245 is ${digitCount(33245)}`);


//***************************
//reversing a number using recursion
let reverseNum = (num) => {
    if (num == 0) {
        return '';
    }
    else {
        let _n = num % 10;
        return _n + reverseNum(parseInt(num / 10));
    }
}
console.log(`Reverse of number 54321 is ${reverseNum(54321)}`);


//***************************
//decimal to binary using recursion
let decToBin = (num) => {
    if (num == 0 || num == 1) {
        return num;
    }
    else {
        return decToBin(parseInt(num / 2)) + '' + (num % 2);
    }
}

console.log(`decimal to binary form of number 15 is ${decToBin(15)}`);



//***************************
//sum of digits of given number
let digitSum = (n) => {
    if (n == 0)
        return 0;
    else {
        return n % 10 + digitSum(parseInt(n / 10));
    }
};

console.log(`sum of digits in number 66555 is ${digitSum(66555)}`);


//************************************
//print digits of a given number using recursion


const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let digitPrint = (num) => {
    if (num <= 0) {
        return '';
    }
    else {
        let _num = parseInt(num % 10);
        return  digitPrint(parseInt(num / 10)) + numArr[_num] + ';';
    }
}

console.log(digitPrint(4432));