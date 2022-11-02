import { randomInt } from "./Random.js";
/**
 * Generates a unique ID string with a given length
 */
export function makeId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPabcdefghijklmnop012345689!@#$%^&*()_+';
    for (let i = 0; i < length; i++) {
        result += characters[randomInt(0, characters.length - 1)];
    }
    return result;
}
