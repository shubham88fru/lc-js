/**
 * @link https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    //Per the question, need to return a new array.
    let res = [];

    //Array.entries() returns an array of arrays
    //where each element is an containing index and element
    //at that index.
    //eg: [1,2,3].entries() -> [[0, 1], [1, 2], [2, 3]];
    //Iterate over the entries and apply the function.
    for (let [i, el] of arr.entries()) {
        res.push(fn(el, i)); //keep pushing the result to new array.
    }
    return res;
};