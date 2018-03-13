
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {

    for (var key in menu) {
        if (isNumeric(menu[key])) {
            menu[key] *= 2;
        }
    }

    console.log(menu);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}