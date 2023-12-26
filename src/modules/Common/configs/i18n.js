import login_en from "../locales/en/login.json";
import login_fr from "../locales/fr/login.json";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                login: login_en
            },
            fr: {
                login: login_fr
            },
        },
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n;