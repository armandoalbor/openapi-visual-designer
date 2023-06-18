import {
  UseTranslationOptions,
  useTranslation as useTranslationI18n,
} from "react-i18next";

interface TranslationOptions extends UseTranslationOptions<any> {
  [key: string]: any;
}

export const useTranslation = () => {
  const { t, i18n } = useTranslationI18n();

  const translationHandler = (
    message: string,
    options?: TranslationOptions
  ): string => t(message, options || {}) as any;

  const language = i18n.language.split("-")[0];

  return {
    t: translationHandler,
    changeLanguage: i18n.changeLanguage,
    language: ["en", "es"].includes(language) ? language : "es",
  };
};
