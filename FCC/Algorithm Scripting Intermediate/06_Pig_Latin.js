/*
* 把指定的字符串翻译成 pig latin。
* https://freecodecamp.cn/challenges/pig-latin
*/
function translate(str) {

    //发辅音且放在单词开头的字母或字母组合
    var consonant = ['c','p','k','b','gl'];
    
    //被测单词是否以辅音开头
    var flag = false;
    for(var i=0; i<consonant.length;i++){
        if(str.startsWith(consonant[i])){
            flag = true;
            str = str.replace(consonant[i],'') + consonant[i] + 'ay';
        }
    }
    if(!flag){
        str += "way";
    }
    return str;
}