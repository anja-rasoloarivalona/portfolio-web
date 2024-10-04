/**
 * Generate an array of numbers inside a range
 * @param size - Size of the array
 * @param startAt - From where to start
 * @returns An array with numbers (ex: range(5) = [1, 2, 3, 4, 5])
 */
export const generateRange = (size: number, startAt = 0) => {
    return [...Array(size).keys()].map((i) => i + startAt);
};
