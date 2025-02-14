import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import ar from "./lang/ar.json";
import dar from "./lang/dar.json";
import ber from "./lang/ber.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
    dar: { translation: dar },
    ber: { translation: ber },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
