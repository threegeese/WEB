/**
 * 传入二进制字符串，翻译成英语句子并返回
 * https://freecodecamp.cn/challenges/binary-agents
 */
function binaryAgent(str){
    var arr = str.split(' ');
    var result = '';
    for(var i=0; i<arr.length; i++){
        result += String.fromCharCode(Number.parseInt(arr[i],2));
    }
    return result;
}