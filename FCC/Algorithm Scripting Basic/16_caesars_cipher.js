/*
* 凯撒密码,又叫移位密码。
* https://freecodecamp.cn/challenges/caesars-cipher
*/
function rot13(str) {
    var res = '';
    for(var i=0; i<str.length; i++){
        if(str.charCodeAt(i) + 13 > 90) {
            res += String.fromCharCode(str.charCodeAt(i) - 13);
        }else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            res += String.fromCharCode(str.charCodeAt(i) + 13);
        }else {
            res += str.charAt(i);
        }
    }
    return res;
}