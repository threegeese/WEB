/*
* 重复一个字符串N次，如果N是一个负数则返回一个空字符串。
* https://freecodecamp.cn/challenges/repeat-a-string-repeat-a-string
*/
function repeatString(str,num) {
    var res = '';
    if(num <= 0){
        return res;
    }
    for(var i=0; i<num; i++){
        res = res.concat(str);
    }
    return res;
}