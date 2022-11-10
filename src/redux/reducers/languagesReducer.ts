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

const defaultState= {
  language: languages.en,
};

export const languagesReducer = (state = defaultState, action: ILanguageAction) => {
  switch (action.type) {
    case LanuageTypes.en:
      return { ...state, language: languages[action.type] };
    case LanuageTypes.de:
      return { ...state, language: languages[action.type] };
    case LanuageTypes.ru:
      return { ...state, language: languages[action.type] };
    case LanuageTypes.ua:
      return { ...state, language: languages[action.type] };
    default:
      return state;
  };
};