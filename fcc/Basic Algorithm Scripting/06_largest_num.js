/*
* 找出多个数组中最大的数，并组成一个新数组
* https://freecodecamp.cn/challenges/return-largest-numbers-in-arrays
*/
function largestNumber(arr) {
    var result = [];
    for (var i=0; i<arr.length; i++) {
        result.push(arr[i].reduce(function(num1,num2){
            return num1 > num2 ? num1 : num2;
        }));
    }
    return result;
}