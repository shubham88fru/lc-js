/**
 * @link https://leetcode.com/problems/allow-one-function-call/
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    //Inner function has closure over
    //this scope.

    let alreadyCalled = false;
    return function(...args){
        //only if called first time.
        if (!alreadyCalled) {
            alreadyCalled = true; //flip it when called first time.
            return fn(...args);
        }
        //otherwise, in js, a function not returning anything
        //returns `udefined` by default.
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */