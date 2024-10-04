import i18n from 'i18next';
import moment from 'moment';
import { initReactI18next } from 'react-i18next';
import { config } from '../config/main';
import { Locale } from '../types';

// Translations
import fr_translation from './fr/translation.json';
import en_translation from './en/translation.json';

// Resources
export const RESOURCES = {
    fr: {
        translation: fr_translation,
    },
    en: {
        translation: en_translation,
    },
};

const LOCALE = 'LOCALE';

// *************************************************************************************
// HELPERS
// *************************************************************************************

const initLocale = (): Locale => {
    // let currentLocale = DEFAULT_LOCALE;
    // Check locale from URL
    const urlLocale = new URLSearchParams().get('locale');
    if (urlLocale != null && validateLocale(urlLocale) === true) {
        return urlLocale as Locale;
    }

    // Check stored locale
    const storedLocale = localStorage.getItem(LOCALE) as Locale;

    if (storedLocale != null && validateLocale(storedLocale) === true) {
        return storedLocale;
    }

    // Check navigator locale
    if (validateLocale(navigator.language) === true) {
        return navigator.language as Locale;
    }

    // Return default
    return config.locales.default;
};

export const changeLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
    localStorage.setItem(LOCALE, locale);
    moment.locale(locale);
};

/**
 * Validate locale
 * @param locale
 * @returns True if the locale is valid
 */
const validateLocale = (locale: any) => {
    return Object.values(config.locales.supported).includes(locale);
};

// *************************************************************************************
// CONFIGURATION
// *************************************************************************************

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: initLocale(),
    fallbackLng: config.locales.default,
    supportedLngs: config.locales.supported,
    resources: RESOURCES,
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    },
    defaultNS: 'translation',
});

export default i18n;
