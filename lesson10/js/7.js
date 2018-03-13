var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(" ");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }

    console.log(arr.join(" "));
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
removeClass(obj, 'menu');