/**
 * 集合中的所有对象都存在对应的属性，并且属性对应的值为真则返回ture
 * https://freecodecamp.cn/challenges/everything-be-true
 */
function every(collection,pre){
    return collection.every(function(ele){
            return ele.hasOwnProperty(pre) && ele[pre];
    });
}