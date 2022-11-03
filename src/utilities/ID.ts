import { randomInt } from "./Random.js";

/**
 * Generates a unique ID string with a given length
 */
export function makeId(length: number): string {
    let result: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPabcdefghijklmnop012345689!@#$%^&*()_+';

    for (let i = 0; i < length; i++){
        result += characters[randomInt(0, characters.length - 1)];
    }

    return result;
}
