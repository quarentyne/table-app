import { LanguageBlock, LanguageButton } from "./styles";

interface ILanguagesChanger {
  actualLanguage: string;
  changeLanguage: (language: string) => void;
};

export const LanguagesChanger = ({actualLanguage, changeLanguage}: ILanguagesChanger) => { 
  return (
    <LanguageBlock>
      <LanguageButton active={actualLanguage === 'ua'} onClick={() => changeLanguage('ua')}>UA</LanguageButton>
      <LanguageButton active={actualLanguage === 'en'} onClick={() => changeLanguage('en')}>EN</LanguageButton>
    </LanguageBlock>
  );
};