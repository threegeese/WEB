/*
* 找出句子中最长的单词，并返回它的长度
* https://freecodecamp.cn/challenges/find-the-longest-word-in-a-string
*/
function longestWord(str) {
    var array = str.split(" ");
    var longest = 0;
    for(var i=0; i<array.length; i++){
        if(longest < array[i].length){
            longest = array[i].length;
        }
    }
    return longest;
}