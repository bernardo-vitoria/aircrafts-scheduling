import { initReactI18next } from "react-i18next";
import { i18nBaseConfig } from "./i18n";
import i18n from "i18next";
// eslint-disable-next-line no-restricted-imports
import { enUS } from "../../public/locales/en-US";

i18n.use(initReactI18next).init({
  ...i18nBaseConfig,
  lng: "en-US",
  resources: {
    "en-US": enUS,
  },
});

export default i18n;
