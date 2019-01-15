/*
* 判断一个字符串是否以指定的字符串结尾。
* https://freecodecamp.cn/challenges/confirm-the-ending
*/
function  confirmEnding(string,target) {
    return string.substr(-target.length) === target;
}