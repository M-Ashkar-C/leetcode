/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   return Math.log2(n) % 1 === 0;
};