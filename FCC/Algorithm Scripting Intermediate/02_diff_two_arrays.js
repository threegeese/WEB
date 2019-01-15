/*
* 返回两个数组的差异
* https://freecodecamp.cn/challenges/diff-two-arrays
*/
function diff(arr1,arr2) {
    var newArr = arr1.concat(arr2);
    return newArr.filter(function(ele){
        return arr1.indexOf(ele) === -1 || arr2.indexOf(ele) === -1;
    });
}