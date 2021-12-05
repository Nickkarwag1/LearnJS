function findLongWord(str){
    let massiveOfString = str.match(/\w[a-z]{0,}/gi);
    let result = massiveOfString[0];
    for (let i=0; i < massiveOfString.length; i++){
        if(result.length < massiveOfString[i].length){
            result  = massiveOfString[i];
        }
    }
    return result;
}

module.exports = findLongWord;