/**
 * Returns a random int on interval [min, max]
 *
 * @param {number} min [int] minimum value (inclusive)
 * @param {number} max [int] maximum value (inclusive)
 * @returns {number} result
 */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
