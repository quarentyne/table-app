import { useTranslation } from "react-i18next";
import { NavbarItem, NavbarLink, NavbarNav } from "./styles";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <NavbarNav>
      <NavbarLink to="/driver">
        <NavbarItem>
          {t("menu.drivers")}
        </NavbarItem>
      </NavbarLink>
      <NavbarLink to="/car">
        <NavbarItem>
          {t("menu.cars")}
        </NavbarItem>          
      </NavbarLink>
    </NavbarNav>
  );
}