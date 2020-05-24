import { store } from '../store/configureStore';
export const getLang = () => {
  if (window.navigator.language) {
    return window.navigator.language.slice(0, 2);
  }
  return 'en';
};

export const localize = (key) => {
  console.log(key)
  const { locales } = store.getState();
  const { currentLanguage } = locales;
  return locales[currentLanguage] ? locales[currentLanguage][key] : key;
}