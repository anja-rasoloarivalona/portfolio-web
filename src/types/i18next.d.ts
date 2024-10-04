import { RESOURCES } from '../translations';

declare module 'i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom resources type
        defaultNS: 'translation';
        resources: typeof RESOURCES.en;
    }
}
