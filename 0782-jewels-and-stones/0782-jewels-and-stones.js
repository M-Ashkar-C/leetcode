/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    stones.split('').filter(values=>{
        if(jewels.includes(values)){
            count++;
        }
        });
        return count;
    
};
