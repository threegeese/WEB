/**
 * 返回所给数组的对等差分(symmetric difference) (△ or ⊕)数组.
 * https://freecodecamp.cn/challenges/symmetric-difference
 */
function sym(args){

    /**
     * 思路：
     * 1. 先将数组逐个去重,在添加到新数组构成一个二维数组
     * 2. 最后调用reduce()对等差分
     */

     //第一步
    var arr = Array.from(arguments,x=>x.sort().reduce(function(init,current){
        if(init.length === 0 || init[init.length-1] !== current){
            init.push(current);
        }
        return init;
      },[]));

    //第二步：
    var result = arr.reduce(function (a,b){
        return sd(a,b);
    });
    return result;

    //对等差分函数
    function sd(arr1,arr2){
        var arr = arr1.concat(arr2);
        return arr.reduce(function(init,cur,idx,src){
            if(src.indexOf(cur) === src.lastIndexOf(cur)){
                init.push(cur);
            }
            return init;
        },[]);      
    }
}