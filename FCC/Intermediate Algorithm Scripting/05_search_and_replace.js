/*
* 使用给定的参数对句子执行一次查找和替换，然后返回新句子
* https://freecodecamp.cn/challenges/search-and-replace
*/
function searchReplace(str, before, after) {
    var arr = after.split('');
    if(before.charCodeAt(0) < 90){
        arr[0] = arr[0].toUpperCase();
    }
    after = arr.join('');
    return str.replace(before,after);
}