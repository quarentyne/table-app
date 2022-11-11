import { languages } from "../../constants/languages";

enum LanuageTypes{
  en = 'en',
  de = 'de',
  ua = 'ua',
  ru = 'ru',
};

export interface ILanguageAction{
  type: LanuageTypes;
} 

const defaultLanguage = () => {
  const lang = localStorage.getItem('language');
  if (lang) {
    return JSON.parse(lang);
  }
  return languages.en;
};

const defaultState = {
  language: defaultLanguage(),
};

export const languagesReducer = (state = defaultState, action: ILanguageAction) => {
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