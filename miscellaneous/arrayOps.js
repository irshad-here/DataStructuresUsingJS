//array operations

//************************ */
//find first repeating number in an array
//Time complexity O(n)

function repeatingNumber(arr) {
    let mapObj = {};
    for(i in arr){
        let num = arr[i];
        if(!mapObj[num]){
            mapObj[num] = 1;
        }
        else{
            return num;
        }
    }
};



//********************************* */
//find repeating number counts in a given array
//Time complexity : O(n)

function repeatingNumberCounts(arr) {
    let mapObj = {};
    for(i in arr){
        let num = arr[i];
        if(!mapObj[num]){
            mapObj[num] = 1;
        }
        else{
            mapObj[num] = mapObj[num] + 1;
        }
    }

    //filtering the duplicate items and coverting them to a readable string
    //note: other approach is just return the mapObj object and let the code outside the function handles the print format
    return Object.keys(mapObj)
                .filter(key => mapObj[key] > 1)
                    .map(key => key + ' is present ' + mapObj[key] + ' times in the given array.');
};


const arr = [2, 5, 4, 7, 3, 4, 7];
console.log(repeatingNumber(arr));
console.log(repeatingNumberCounts(arr));
