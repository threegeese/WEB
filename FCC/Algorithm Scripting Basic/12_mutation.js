/*
* 数组第一个字符串元素包含了第二个字符串元素的所有字符，则返回true。
* https://freecodecamp.cn/challenges/mutations
*/
function mutation(arr){
    arr = arr.join(' ').toLowerCase().split(' ');
    for(var i=0; i<arr[1].length; i++){
        if(arr[0].indexOf(arr[1][i]) === -1){
            return false;
        }
    }
    return true;
}