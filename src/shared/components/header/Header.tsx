import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalHeader } from "./styles";
import { Navbar } from "../navbar/Navbar";
import logoBig from "../../../assets/images/logo100w.png";
import logoMin from "../../../assets/images/logo50w.png";
import { LanguagesChanger } from "../languageChanger/LanguageChanger";
import i18n from "../../../i18n";

export const Header = () => { 
  const [actualLanguage, setActualLanguage] = useState(localStorage.getItem('i18nextLng') || 'ua');
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActualLanguage(lang);
  };

  return (
    <GlobalHeader>
      <Link to="/">
        <picture>
          <source srcSet={logoBig} media="(min-width: 768px)" />
          <source srcSet={logoMin} media="(max-width: 768px)" />
          <img src="logoBig" alt="logo" />
        </picture>
      </Link>
      <Navbar />    
      <LanguagesChanger actualLang={actualLanguage} changeLang={changeLanguage} />
    </GlobalHeader>  
  );
};