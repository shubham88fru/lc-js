/**
 * @link https://leetcode.com/problems/filter-elements-from-array/
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    //new array to be returned.
    const res = [];

    //iterate over each entry in array,
    //apply fn, and if truthy, add it to ans.
    for (let [i, el] of arr.entries()) {
        if (fn(el, i)) res.push(el);
    }

    return res;
};