/**
 * 返回一个以给定的原始数组排序的不包含重复值的新数组
 * https://freecodecamp.cn/challenges/sorted-union
 */
function unite(arr1, arr2, arr3){
    var arr = [];
    for(var i=0; i<arguments.length; i++){
        arr.push(arguments[i]);
    }
    arr = arr.reduce(function(a,b){
        return a.concat(b);
    });

    /**
     * var arr = Array.from(arguments).reduce(function(pre,cur){
     *     return pre.concat(cur);
     * });
     */

    return arr.filter(function(item,index){
        return arr.indexOf(item) === index;
    });
}