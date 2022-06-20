import LocalizedStrings from 'react-native-localization';
import english from '../languages/en.js';
import hindi from '../languages/hi.js';
import gujarati from '../languages/gu.js';

export const LANGUAGES = [
    {
        code: 'en',
        name: 'English',
    },
    {
        code: 'hi',
        name: 'हिंदी',
    },
    {
        code: 'gu_IN',
        name: 'ગુજરાતી',
    },
];

export const Strings = new LocalizedStrings({
    en: english,
    hi: hindi,
    gu_IN: gujarati,
});

export const changeLanguage = languageKey => {
    Strings.setLanguage(languageKey);
};
