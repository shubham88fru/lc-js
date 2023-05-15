/**
 * @link https://leetcode.com/problems/memoize/description/
 * @param {Function} fn
 */
function memoize(fn) {
    //Use javascript Map object as a cache.
    //inner function has a closure over this.
    
    const cache = new Map();

    return function(...args) {
        //join the args with "-" to be used a key in map.
        //Note: can't use args as a key directly, because each time
        //this fucntion is called, args will be a new array object, and 
        //map would then see it as a different key (even though values in args are same)
        
        const key = args.join("_");

        //Test if cache hit or miss.
        const cacheMiss = cache.get(key) == undefined;

        //if cache misss, add to cache, for next turn.
        if (cacheMiss) {
            cache.set(key, fn(...args));
        }

        //return the cached value.
        return cache.get(key);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */