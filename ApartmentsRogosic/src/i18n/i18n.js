import i18next from "i18next"

i18next.init({
  fallbackLng: "en",
  resources: {
    hr: {
      translations: require("../locales/hr/translations.json"),
    },
    en: {
      translations: require("../locales/en/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["hr", "en"]

export default i18next
