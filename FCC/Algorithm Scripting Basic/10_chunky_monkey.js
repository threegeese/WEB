/*
* 把一个数组按照指定的数组大小分割成若干个数组块
* https://freecodecamp.cn/challenges/chunky-monkey
*/
function chunk(arr,size) {
    var res = [];
    for(var i=0; i<arr.length; i+=size){
        res.push(arr.slice(i,i+size));
    }
    return res;
}