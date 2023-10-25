import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./en.json"),
    },
    ru: {
      translation: require("./ru.json"),
    },
    turc: {
      translation: require("./turc.json"),
    },
  },
  lng: "ru", // Устанавливает язык по умолчанию
  fallbackLng: "ru", // Язык, на который будет откатываться, если перевод не найден
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
