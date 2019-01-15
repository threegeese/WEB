/*
* 数组排序，找到指定的值在数组的位置后返回位置对应的索引。
* https://freecodecamp.cn/challenges/where-do-i-belong
*/
function where(arr,num) {
    arr.push(num);
    arr.sort(function(a,b){
        return a - b;
    });
    return arr.indexOf(num);
}