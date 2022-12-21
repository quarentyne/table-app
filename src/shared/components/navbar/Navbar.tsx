import { useTranslation } from "react-i18next";
import driver from "../../../assets/svg/driver.svg";
import taxi from "../../../assets/svg/taxi.svg";
import { NavbarItem, NavbarLink, NavbarNav } from "./styles";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <NavbarNav>
      <NavbarLink to="/driver">
        <NavbarItem>
          <img src={driver} width={25} height={25} alt="driver" />
          {t("menu.drivers")}
        </NavbarItem>
      </NavbarLink>
      <NavbarLink to="/car">
        <NavbarItem>
          <img src={taxi} width={25} height={25} alt="car" />
          {t("menu.cars")}
        </NavbarItem>          
      </NavbarLink>
    </NavbarNav>
  );
}