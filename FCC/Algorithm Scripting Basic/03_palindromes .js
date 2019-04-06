/*
* 检查回文字符串
* https://freecodecamp.cn/challenges/check-for-palindromes
*/

function palindromes(str) {
    var lowerString = str.replace(/[\W_]/g,'').toLowerCase();
    var reverseString = lowerString.split('').reverse().join('');
    
    return lowerString == reverseString;
}