/*
* 计算一个整数的阶乘(Factorialize a Number)
* https://freecodecamp.cn/challenges/factorialize-a-number
*/
function factNum(N){
    if(N > 1){
        return N * factNum(--N);
    }else{
        return 1;
    }
}