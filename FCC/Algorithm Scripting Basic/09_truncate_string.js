/*
* 截断字符串.字符串的长度比指定的参数长，则把多余的部分用...来表示
* https://freecodecamp.cn/challenges/truncate-a-string
*/
function truncate(str,num) {
    if(num <= 3){
        str = str.slice(0,num) + '...';
    }else if(str.length > num){
        str = str.slice(0,num-2).trim() + '...';
    }
    return str;
}