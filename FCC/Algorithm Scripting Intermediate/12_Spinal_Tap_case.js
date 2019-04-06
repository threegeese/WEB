/**
 * 以连字符连接所有小写单词
 * https://freecodecamp.cn/challenges/spinal-tap-case
 */
function spinalCase(str){
    return str.replace(/[\W_]/g,'-').replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();
}