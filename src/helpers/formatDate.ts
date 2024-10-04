import { Locale } from '../types';

/**
 * Format date
 * @param date
 * @param locale
 * @return {string}
 */
export const formatDate = (date: Date, locale: Locale): string => {
    if (locale === Locale.EN) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }).format(date);
    } else {
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }).format(date);
    }
};
