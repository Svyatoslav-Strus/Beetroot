var j,s;

j = prompt("vvedite pervuyu stroku:", "");
s = prompt("vvedite vtoruyu stroku:", "");

alert( countJewels(j, s) );

function countJewels(jewels, stones) {
    var arrayJewels = jewels.split("");
    var arrayStones = stones.split("");
    var output = 0;

    for (var stone in arrayStones ) {
        for (var jewel in arrayJewels) {
            if (arrayJewels[jewel] == arrayStones[stone]){
                output++;
            }
        }
    }

    return output;
}