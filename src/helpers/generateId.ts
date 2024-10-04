import { v4 } from 'uuid';

/**
 * Generate id
 * @return {string}
 */
export const generateId = (): string => {
    return v4();
};
