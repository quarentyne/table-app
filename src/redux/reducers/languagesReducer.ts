import { ILanguage, languages } from "../../constants/languages";

enum LanuageTypes{
  en = 'en',
  de = 'de',
  ua = 'ua',
  ru = 'ru',
};

export interface ILanguageAction{
  type: LanuageTypes;
} 

const defaultLanguage = ():ILanguage => {
  const lang = localStorage.getItem('language');
  if (lang) {
    return JSON.parse(lang);
  }
  return languages.en;
};

export const defaultLanguageState = {
  language: defaultLanguage(),
};

export const languagesReducer = (state = defaultLanguageState, action: ILanguageAction) => {
  switch (action.type) {
    case LanuageTypes.en:
      localStorage.setItem('language', JSON.stringify(languages.en));
      return { ...state, language: languages[action.type] };
    case LanuageTypes.de:
      localStorage.setItem('language', JSON.stringify(languages.de));
      return { ...state, language: languages[action.type] };
    case LanuageTypes.ru:
      localStorage.setItem('language', JSON.stringify(languages.ru));
      return { ...state, language: languages[action.type] };
    case LanuageTypes.ua:
      localStorage.setItem('language', JSON.stringify(languages.ua));
      return { ...state, language: languages[action.type] };
    default:
      return state;
  };
};