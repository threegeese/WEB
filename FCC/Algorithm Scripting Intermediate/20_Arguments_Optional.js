/**
 * 只有一个参数，则返回一个function请求一个参数然后返回求和的结果
 * https://freecodecamp.cn/challenges/arguments-optional
 */
function add(){
    if(typeof(arguments[0]) === "number" && typeof(arguments[1]) === "number"){
        return arguments[0] + arguments[1];
    }else if(arguments.length === 1 && typeof(arguments[0]) === "number"){
        var x = arguments[0];
        return function(y){
          if(typeof y === "number"){
            return x + y;
          }
        };
    }
}