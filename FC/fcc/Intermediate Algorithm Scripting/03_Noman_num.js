/*
* 将给定的数字转换成罗马数字
* https://freecodecamp.cn/challenges/roman-numeral-converter
*/
function convert(num) {
    var romanNum = '';
    var number =[1000, 900, 500, 400, 100,90, 50, 40, 10, 9, 5, 4, 1];
    var roman =["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for(var i=0; i<13; i++){
        if(num < num[i]){
            continue;
        }
        while(num >= number[i]){
            romanNum += roman[i];
            num -= number[i];
        }
    }
    return romanNum;
}