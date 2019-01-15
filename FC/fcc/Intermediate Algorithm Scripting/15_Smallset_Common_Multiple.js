/**
 * 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数
 * https://freecodecamp.cn/challenges/smallest-common-multiple
 */
function smallestCommons(arr){


    var res = [];

    function gcd(m,n){
        return m % n === 0 ? n : gcd(n,m % n);
    }

    arr.sort(function(a,b){
        return a - b;
    });

    for(var i=arr[0]; i<=arr[arr.length-1]; i++){
        res.push(i);
    }

    //求多个自然数的最小公倍数,可以先求出其中两个数的最小公倍数,
    //再求这个最小公倍数与第三个数的最小公倍数,依次求下去,直到最后一个为止.
    return res.reduce(function(a,b){
        return b * a / gcd(a,b);
    });
}