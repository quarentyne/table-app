import { Languages } from "../../helpers/themes";
import { LanguageBlock, LanguageButton } from "./styles";

interface ILanguagesChanger {
  actualLanguage: string;
  changeLanguage: (language: string) => void;
};

export const LanguagesChanger = ({actualLanguage, changeLanguage}: ILanguagesChanger) => { 
  return (
    <LanguageBlock>
      <LanguageButton active={actualLanguage === Languages.UA} onClick={changeLanguage.bind(null, Languages.UA)}>{Languages.UA.toUpperCase()}</LanguageButton>
      <LanguageButton active={actualLanguage === Languages.EN} onClick={changeLanguage.bind(null, Languages.EN)}>{Languages.EN.toUpperCase()}</LanguageButton>
    </LanguageBlock>
  );
};