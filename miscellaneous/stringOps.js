//string oprations using recursions

//****************************************
//remove char from string -solution 1
let removeChar = (str, ch) => {
    if (str.length === 0)
        return '';
    else if (str.indexOf(ch) > -1) {
        let chIndx = str.indexOf(ch);
        return removeChar(str.substring(0, chIndx), ch) + removeChar(str.substring(chIndx + 1, str.length), ch);

    }
    else
        return str;
};

console.log(removeChar('Hello there', 'h'));
console.log(removeChar('independence', 'e'));


//remove char from string -solution 2

let removeChar2 = (str, ch) => {
    let len = str.length;
    let lastIndx = len - 1;
    if (len === 0)
        return '';
    else if (str[lastIndx] == ch) {
        return removeChar2(str.substring(0, lastIndx), ch);
    }
    else {
        return removeChar2(str.substring(0, lastIndx), ch) + str[lastIndx];
    }
}

console.log(removeChar2('Hello there', 'h'));
console.log(removeChar2('independence', 'e'));


//****************************************
//count character ouccrence in a given string using recursion

let countChars = (str, ch, indx = 0) => {
    if (indx == str.length)
        return 0;
    else if (str[indx] == ch) {
        return 1 + countChars(str, ch, indx + 1);
    }
    else {
        return countChars(str, ch, indx + 1);
    }
}
console.log(countChars('dependable', 'e'));


//****************************************
//reverse a string using recursion

let reverseStr = (str) => {
    let len = str.length;
    let lastIndx = len - 1;
    if (len == 0) {
        return '';
    }
    else {
        return str[lastIndx] + reverseStr(str.substring(0, lastIndx));
    }
}
console.log(reverseStr('independence'));

//***************************************
//print character combinations (sub strings) of given string
const subStrArr = [];
let subStrs = (s, ans = '', indx = 0) => {
    if (ans != '') {
        // console.log(`ans => ${ans}`);
        if (subStrArr.indexOf(ans) < 0)
            subStrArr.push(ans);
    }
    if (indx == s.length || s.length == 0) {
        return '';
    }
    subStrs(s, ans + s[indx], indx + 1);
    subStrs(s, ans, indx + 1);

    return subStrArr;
}

console.log(subStrs('abc'));

//**********************
//permutations of string chars
const strPermutationArr = [];

let strCombos = (str, ans = '') => {
    if (str.length == 0) {
        // console.log('=>' + ans);
        if (strPermutationArr.indexOf(ans) < 0)
            strPermutationArr.push(ans);
        return '';
    }
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        let newStr = str.substring(0, i) + str.substring(i + 1);
        strCombos(newStr, ans + ch);
    }
    return strPermutationArr;
}

console.log(strCombos('abcd'));