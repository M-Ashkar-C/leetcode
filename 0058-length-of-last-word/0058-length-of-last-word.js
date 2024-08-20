/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    word=s.split(" ");
    for(i=word.length-1;i>=0;i--){
        if(word[i].length===0){
            continue;
        }else{
            return word[i].length
        }
    }
};