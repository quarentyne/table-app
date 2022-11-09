import { FC } from "react";
import { NavLink } from 'react-router-dom';
import { languages } from "../../constants/languages";
import classes from './Navbar.module.scss';

export const Navbar: FC = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to='/driver' className={classes.nav__link }>{languages.en.menu.drivers}</NavLink>
      <NavLink to='/car' className={classes.nav__link}>{languages.en.menu.cars}</NavLink>
    </nav>
  );
};