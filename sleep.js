/**
 * @link https://leetcode.com/problems/sleep/description/
 * @param {number} millis
 */
async function sleep(millis) {
    //returns a promise..
    return new Promise(function cb(res, rej) {
        //..that resolves (calls res()) after `millis` time.
        setTimeout(() => res(`Meaning of Life`), millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
*/