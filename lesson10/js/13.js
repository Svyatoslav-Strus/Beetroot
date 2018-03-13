/**
 * @param {string[]} strs
 * @return {string}
 */
var strs = ["a", "ab", "abc", "abcd", "abcde", "abcdef"];

console.log(longestCommonPrefix(strs));

function longestCommonPrefix(strs) {

    if (strs == null || strs.length == 0) return "";
    for (var i = 0; i < strs[0].length; i++){
        var c = strs[0].charAt(i);
        for (var j = 1; j < strs.length; j ++) {
            if ((i == strs[j].length) || (strs[j].charAt(i) != c))
                return strs[0].substring(0, i);
        }
    }
    return strs[0];
}

