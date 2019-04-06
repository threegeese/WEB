/*
* DNA链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基。
* https://freecodecamp.cn/challenges/dna-pairing
*/
function pair(str) {
    var temp;
    var result = [];
    var pairs = str.split('');
    
    for(var i=0; i<pairs.length; i++){
      switch(pairs[i]){
        case 'A':
          temp = pairs.slice(i,i+1);
          temp.push('T');
          result.push(temp);
          break;
        case 'T':
          temp = pairs.slice(i,i+1);
          temp.push('A');
          result.push(temp);
          break;
        case 'G':
          temp = pairs.slice(i,i+1);
          temp.push('C');
          result.push(temp);
          break;
        case 'C':
          temp = pairs.slice(i,i+1);
          temp.push('G');
          result.push(temp);
          break;
      }
    }
    
    return result;
}