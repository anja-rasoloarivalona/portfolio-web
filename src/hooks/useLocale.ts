import { useTranslation } from 'react-i18next';
import { Locale } from '../types';

export const useLocale = () => {
    const { i18n } = useTranslation();
    return i18n.language as Locale;
};
