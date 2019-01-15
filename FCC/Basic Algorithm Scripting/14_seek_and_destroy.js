/*
* 实现一个函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
* https://freecodecamp.cn/challenges/seek-and-destroy
*/
function destroyer(arr) {
    var argument = arguments;
    var result = arr.filter(function(ele){
        var bool = true;
        for(var i = 1; i < argument.length; i++){
            if(ele === argument[i]){
                bool = false;
                break;
            }
        }
        return bool;
    });
    return result;
}