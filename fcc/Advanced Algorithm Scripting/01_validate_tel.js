/**
 * 如果传入字符串是一个有效的美国电话号码，则返回 true
 * https://freecodecamp.cn/challenges/validate-us-telephone-numbers
 */
function telephoneCheck(p_num){

    /**
     * 这两个正则表达式能通过测试,但好像不完美
     * return /^1?\s?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/.test(p_num);
     * return /^1?\s?(\d{3}|\(\d{3}\))(([- ]?\d{3})){2}\d$/.test(p_num);
     * 
     */


    return /^1?\s?((\d{3}([- ]?)\d{3}\3)|(\(\d{3}\)[ ]?\d{3}-))\d{4}$/.test(p_num);
}