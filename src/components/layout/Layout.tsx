import { FC } from "react";
import logo from '../../assets/logo.png';
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { LanguagesChanger } from "../languagesChanger/LanguagesChanger";
import classes from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <>
      <header className={classes.header}>
        <Link to='/'><img src={logo} alt="logo" width={100} height={50} /></Link>
        <Navbar />    
        <LanguagesChanger />
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}