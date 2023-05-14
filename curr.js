/**
 * @link https://leetcode.com/problems/curry/
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    //Function.length gives the no. of arguments 
    //a passed fucntion is called with.
    //The function `curried` will have closure over
    //the below two variables.
    let argsCount = fn.length;
    let argsArr = [];

    return function curried(...rest) {
        //to keep a track of how many times
        //we need to return a function. We only
        //return a function if we still have pending
        //parameters to be passed.
        argsCount -= rest.length; //rest.length gives no. of params passed in curried call.

        //keep accumulating the parms paased to curried function.
        argsArr = argsArr.concat(rest);

        //Finally, if all the params have been passed,
        //call the original function by spreading the params.
        if (argsCount == 0) return fn(...argsArr);

        //otherwise return curried to be called again.
        else return curried;
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */