import { derived, writable } from "svelte/store";
import translations from "./translations";
import {browser} from "$app/environment";

const defaultLanguage = 'en';
const supportedLanguages = ['en', 'el'];
// , 'de', 'fr', 'es', 'zh'];

const initialLanguage = browser ? window.localStorage.getItem('lang') ?? supportedOrDefault(browserLanguages(true)[0]) : defaultLanguage;

export const locale = writable(initialLanguage);
export const locales = Object.keys(translations);

locale.subscribe((lang) => {
    if (browser) {
        window.localStorage.setItem('lang', lang);
    }
});

function translate(locale, key, vars) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}


function browserLanguages(languageCodeOnly = false) {
  if (browser) {
      return navigator.languages.map((lang) =>
          languageCodeOnly ? lang.split("-")[0] : lang,
      );
  }
}

function supportedOrDefault(lang) {
  if (supportedLanguages.includes(lang)) return lang;
  return defaultLanguage;
}



export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
);