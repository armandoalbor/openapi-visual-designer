import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { es } from "./es";

const translations = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

const config = {
  resources: translations,
  fallbackLng: "es",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    // wait: false,
    useSuspense: true,
  },
  saveMissing: true,
  missingKeyHandler: function (locale: any, ns: any, key: any) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      throw new Error(`The key does not exist in the translation file: ${key}`);
    } else {
      throw new Error(`The key does not exist in the translation file: ${key}`);
    }
  },
};

i18n.use(initReactI18next).init(config);

export const languages = Object.keys(translations);

export default i18n;
