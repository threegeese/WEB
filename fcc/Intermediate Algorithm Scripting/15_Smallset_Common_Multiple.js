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

    return res.reduce(function(a,b){
        return b * a / gcd(a,b);
    });
}