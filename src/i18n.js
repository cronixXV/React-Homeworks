import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enTranslation from "./Locales/En/translation.json"
import ruTranslation from "./Locales/Ru/translation.json"
import arTranslation from "./Locales/Ar/translation.json"

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
  ar: {
    translation: arTranslation,
  },
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
})

export default i18n
