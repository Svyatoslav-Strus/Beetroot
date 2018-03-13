var arr = [5, 2, 1, -10, 8];

function compareBack(a, b){
    return b - a;
}

console.log(arr.sort(compareBack));