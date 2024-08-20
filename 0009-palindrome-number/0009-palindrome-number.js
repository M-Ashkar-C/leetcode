/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    str=x.toString();
    sp=str.split('').reverse().join('');
    if(str===sp){
        return true
    }else{
        return false
    }
}