import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingKo from "../locales/ko/landing.json";
import landingEn from "../locales/en/landing.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: { landing: landingKo },
      en: { landing: landingEn },
    },
    lng: "ko",
    fallbackLng: "en",
    ns: ["landing"],
    defaultNS: "landing",
    interpolation: { escapeValue: false },
  });

export default i18n;
