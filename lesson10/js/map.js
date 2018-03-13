var arr = [1, 2, 3, 4, 5];

function square(x) {
    return x * x;
}

function map(square, arr) {
    var tmpArr = [];

    for (var key in arr) {
        tmpArr.push(square(arr[key]));
    }

    return tmpArr;
}

console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

