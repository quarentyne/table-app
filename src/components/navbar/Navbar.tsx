import { FC } from "react";
import { NavLink } from 'react-router-dom';
import { languages } from "../../constants/languages";
import classes from './Navbar.module.scss';
import driver from '../../assets/driver.svg'
import taxi from '../../assets/taxi.svg'

export const Navbar: FC = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to='/driver' className={classes.nav__link}>
        <span className={classes.nav__item}>
          <img src={driver} width={25} height={25} alt='driver'/>
          {languages.en.menu.drivers}
        </span>
      </NavLink>
      <NavLink to='/car' className={classes.nav__link}>
        <span className={classes.nav__item}>
          <img src={taxi} width={25} height={25} alt='car'/>
          {languages.en.menu.cars}
        </span>          
      </NavLink>
    </nav>
  );
};