import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalHeader } from "./styles";
import { Navbar } from "../Navbar/Navbar";
import logoBig from "../../../assets/images/logo100w.png";
import logoMin from "../../../assets/images/logo50w.png";
import { LanguagesChanger } from "../LanguageChanger/LanguageChanger";
import i18n from "../../../i18n";
import { Languages } from "../../helpers/themes";

export const Header = () => { 
  const [actualLanguage, setActualLanguage] = useState(localStorage.getItem('i18nextLng') || Languages.UA);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setActualLanguage(language);
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
      <LanguagesChanger actualLanguage={actualLanguage} changeLanguage={changeLanguage} />
    </GlobalHeader>  
  );
};