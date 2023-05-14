/**
 * @link - https://leetcode.com/problems/function-composition/
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        //Reverse the functions array, since the given input is
        //applied to the last function first. Subsequently, keep
        //applying the functions one by one over the result of calling
        //the previous function. (used Arrays.reduce() to do the same)
        return functions
            .reverse()
            .reduce((ans, fn) => (ans = fn(ans)), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */