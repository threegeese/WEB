/*
* 删除数组中的所有假值(false、null、0、""、undefined、NaN)
* https://freecodecamp.cn/challenges/falsy-bouncer
*/
function bouncer(arr) {
    return arr.filter(function(val){ return Boolean(val);});
    //return arr.filter(Boolean);
}