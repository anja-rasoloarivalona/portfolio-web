import { TFunction } from 'i18next';

/**
 * Get greeting
 * @param t
 * @return {string}
 */
export const getGreeting = (t: TFunction<'translation', undefined>) => {
    const hours = new Date().getHours();
    if (hours >= 17) {
        return t('generic.greetings.evening');
    }
    if (hours >= 13) {
        return t('generic.greetings.afternoon');
    }
    return t('generic.greetings.morning');
};
