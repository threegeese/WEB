/**
 * 将字符 &、<、>、" , 以及 ' 转换为它们对应的 HTML 实体
 * https://freecodecamp.cn/challenges/convert-html-entities
 */
function convert(str){
    return str.replace(/[&<>"']/g,function(match){
        return '&' + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"apos"}[match] + ";";
    });
}