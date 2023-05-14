/**
 * @link https://leetcode.com/problems/counter/
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    //The returned function has closure
    //over this scope, and so everytime 
    //the inner function is called, it modifies
    //this same variable.
    let clsr = n-1;
    return function() {
        clsr += 1;
        return clsr;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */