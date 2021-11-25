// @ts-nocheck
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-http-backend";

export const i18nBaseConfig = {
  fallbackLng: "en-US",
  whitelist: ["en-US", "pt-PT"],
  defaultNS: "mainPage",
  ns: [
    "mainPage",
  ],

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

const i18nConfig = {
  ...i18nBaseConfig,
  backend: {
    crossDomain: true,
    loadPath: `http://localhost:3000/locales/{{lng}}/{{ns}}.json`,
  },
  react: {
    wait: true
  }
};

  i18n.use(initReactI18next).use(Backend).init(i18nConfig);



export default i18n;
