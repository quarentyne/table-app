import { FC } from "react";
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';
import driver from '../../assets/driver.svg'
import taxi from '../../assets/taxi.svg'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ILanguageMenu } from "../../constants/languages";

export const Navbar: FC = () => {
  const menuLang: ILanguageMenu = useTypedSelector(lang => lang.language.language.menu);  

  return (
    <nav className={classes.nav}>
      <NavLink to='/driver' className={classes.nav__link}>
        <span className={classes.nav__item}>
          <img src={driver} width={25} height={25} alt='driver'/>
          {menuLang.drivers}
        </span>
      </NavLink>
      <NavLink to='/car' className={classes.nav__link}>
        <span className={classes.nav__item}>
          <img src={taxi} width={25} height={25} alt='car'/>
          {menuLang.cars}
        </span>          
      </NavLink>
    </nav>
  );
};