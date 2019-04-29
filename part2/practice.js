function dummy () {
    return 1;
}
/**
 * Reverse an array
 *
 * @example
 *
 * reverse([1,2,3]) returns [3,2,1]
 *
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
    return array.reverse();
}

/**
 * Reverse a string
 *
 * @example
 *
 * stringReverse('hello') returns 'olleh'
 *
 * @param {string} text
 * @returns {string}
 *
 */
function stringReverse (text) {
    return text.split('').reverse().join('');
}


/**
 * return a fixed length fibonacci list
 *
 * @example
 *
 * fibonacci(5) returns [1,1,2,3,5]
 *
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
    let arr = [1, 1];
    for (let i = 2; i < length; i++){
        arr.push(arr[i - 2] + arr[i -1])
    }
    return arr
}

/**
 * return the biggest number in the array
 *
 * @example
 *
 * biggest([1,3,5,7,9]) returns 9
 *
 * @param {array} array
 * @returns {number}
 */
function biggest (array) {
    return Math.max(...array);
}

/**
 * Creates an array of numbers progressing from
 * start up to, but not including, end
 *
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 *
 * @example
 *
 * range(0,4) returns [0,1,2,3]
 *
 * @param {number} start
 * @param {number} end
 * @returns {array}
 */
function range (start, end) {
    let a = [];
    for (let i = start; i < end; i++) a.push(i);
    return a;
}

/**
 * Recursively flattens array.
 *
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 *
 * @example
 *
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 *
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
    let out = [];
    
    function f(arr) {
        for (let i of arr) {
            if (typeof i === "object" && i !== null) {
                f(i);
            } else {
                out.push(i)
            }
        }
    }
    
    
    f(array);
    
    return out;
}

module.exports = {
    dummy,
    fibonacci,
    reverse,
    flatten,
    biggest,
    stringReverse,
    range
};
