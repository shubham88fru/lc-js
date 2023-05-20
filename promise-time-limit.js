/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        
        //return a promise that..
        return new Promise((res, rej) => {
            //...rejects as soon as soon as threshold `t` passes.
            const timeout = setTimeout(() => rej(`Time Limit Exceeded`),  t);

            //...otherwise, resolves or rejects to the value that
            //fn resolves or reject to.
            fn(...args)
            .then(data => {
                //fn has resolved, clear the timeout.
                clearTimeout(timeout);
                res(data);
            })
            .catch(err => rej(err)); 
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */