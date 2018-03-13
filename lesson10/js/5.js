var obj = {
    className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

function addClass(obj, cls){
    var arr = obj.className.split(" ");

    if (arr.indexOf(cls) == -1) {
        arr.push(cls);
    }
    obj.className = arr.join(" ");
    console.log(obj.className);
}