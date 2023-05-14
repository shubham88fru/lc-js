/**
 * @link https://leetcode.com/problems/array-reduce-transformation/
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    //final answer. Initialized with init.
    let reduced = init;

    //iterate over array and keep reducing.
    for (let [i, el] of nums.entries()) {
        reduced = fn(reduced, el);
    }
    return reduced;
};