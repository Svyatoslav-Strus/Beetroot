var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function anagrma(arr) {
    var tmpArr = arr.slice();



    var stringArr = [];


    for (var i = 0; i < tmpArr.length; i++) {
        stringArr.push(tmpArr[i].toLowerCase().toLowerCase())
    }


    for (var i = 0; i < tmpArr.length; i++) {
        for (var j = 1; j < tmpArr.length; j++) {
            if (tmpArr[i] == tmpArr[j]) {

            }
        }
    }

}

alert( aclean(arr) );