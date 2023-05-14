/**
 * @link https://leetcode.com/problems/counter-ii/
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    //Inner function has closure over this scope.

    let clsr = init;
    return {
        increment: function() {
            clsr += 1; //increment
            return clsr;
        },
        decrement: function() {
            clsr -=1; //decrement
            return clsr;
        },
        reset: function() {
            clsr = init; //set to original value
            return clsr;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */