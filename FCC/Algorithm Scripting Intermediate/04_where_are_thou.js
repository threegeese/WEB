/*
* 遍历一个对象数组并返回一个包含相匹配的属性-值对的所有对象的数组。
* https://freecodecamp.cn/challenges/where-art-thou
*/
function where(collection, source) {
    var arr = [];
    var flag = false;
    for(var i=0; i<collection.length; i++){
        for(var prop in source){
            flag = collection[i].hasOwnProperty(prop) && collection[i][prop] === source[prop];
        }
        if(flag){
            arr.push(collection[i]);
        }
    }
    return arr;
}