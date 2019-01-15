/*
* 确保字符串的每个单词首字母都大写，其余部分小写
* https://freecodecamp.cn/challenges/title-case-a-sentence
*/
function titleCase(str) {
    var array = str.split(' ');
    for(var i=0; i<array.length; i++){
      array[i] = array[i].substr(0,1).toUpperCase() + array[i].substr(1).toLowerCase();
    }
    return array.join(' ');
}