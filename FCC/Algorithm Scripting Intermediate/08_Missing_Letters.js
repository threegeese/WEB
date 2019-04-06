/**
 * 从传递进来的字母序列中找到缺失的字母并返回它。
 * https://freecodecamp.cn/challenges/missing-letters
 */
function fearNotLetter(str){
    var result;
    var arr = [];
    for(var i=0; i<str.length; i++){
        arr.push(str.charCodeAt(i));
    }
    for(var j=1; j<arr.length; j++){
        if(arr[j]-arr[j-1] == 2){
            result = String.fromCharCode(arr[j]-1);
            break;
        }
    }
    return result;
}