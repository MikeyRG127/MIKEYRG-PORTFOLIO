import { defaultLocale, locales } from "./constants/locales";

const i18n = {
    defaultLocale,
    locales: locales.map((l) => l.locale),
}
export default i18n;