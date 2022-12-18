import { LanguageBlock, LanguageButton } from "./styles";

interface ILanguagesChanger {
  actualLang: string;
  changeLang: (lang: string) => void;
};

export const LanguagesChanger = ({actualLang, changeLang}: ILanguagesChanger) => { 
  return (
    <LanguageBlock>
      <LanguageButton active={actualLang === 'ua'} onClick={() => changeLang('ua')}>UA</LanguageButton>
      <LanguageButton active={actualLang === 'en'} onClick={() => changeLang('en')}>EN</LanguageButton>
    </LanguageBlock>
  );
};