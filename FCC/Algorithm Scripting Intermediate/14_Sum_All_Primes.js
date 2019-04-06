/**
 * 求小于等于给定数值的质数之和
 * https://freecodecamp.cn/challenges/sum-all-primes
 */
function sumPrimes(num){
    var result = [0];
    var isPrime;
    for(var i=2; i<=num; i++){
        isPrime = true;
        for(var j=2; j*j<=i; j++){
            if(i % j === 0)
                isPrime = false;
        }
        if(isPrime)
            result.unshift(i);
    }
    return result.reduce(function(a,b){
        return a + b;
    });
}