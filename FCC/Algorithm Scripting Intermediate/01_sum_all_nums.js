/*
* 包含两个数字的数组,返回这两个数字和它们之间所有数字的和.
* https://freecodecamp.cn/challenges/sum-all-numbers-in-a-range
*/
function sumAll(arr){
    /*
    var result = 0;
    for(var i=Math.min(...arr);i<=Math.max(...arr);i++){
        result += i;
    }
    return result;
    */
    return (arr[0] + arr[1]) * (Math.abs(arr[0]-arr[1])+1) / 2;
}