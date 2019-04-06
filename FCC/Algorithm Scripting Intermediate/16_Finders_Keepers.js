/**
 * 写一个 function，它遍历数组 arr，并返回数组中第一个满足 func 返回值的元素
 * https://freecodecamp.cn/challenges/finders-keepers
 */
function find(arr,func){
    return arr.filter(func)[0];
}