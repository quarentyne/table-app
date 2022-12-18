import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalHeader } from "./styles";
import { Navbar } from "../navbar/Navbar";
import logo from "../../../assets/images/logo.png";
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
      <Link to="/"><img src={logo} alt="logo" width={100} height={50} /></Link>
      <Navbar />    
      <LanguagesChanger actualLang={actualLanguage} changeLang={changeLanguage} />
    </GlobalHeader>  
  );
};