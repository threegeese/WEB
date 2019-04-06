/**
 * 给一个正整数num,返回小于或等于num的斐波纳契奇数之和
 * https://freecodecamp.cn/challenges/sum-all-odd-fibonacci-numbers
 */
function sumFibs(num){

    if(num <= 1) return 0;
    var oddFibs,result;
    var arr = [1,1];

    while(arr[arr.length-2] + arr[arr.length-1] <= num){
        arr.push(arr[arr.length-2] + arr[arr.length-1]);
    }

    oddFibs = arr.filter(function(num){
        return num % 2 !== 0;
    });

    result = oddFibs.reduce(function(a,b){
        return a + b;
    });
    
    return result;
}