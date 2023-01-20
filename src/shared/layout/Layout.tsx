import { FC } from "react";
import { Outlet} from "react-router-dom";
import { GlobalMain } from "./styles";
import { Container } from "../../styles";
import { Header } from "../components/dHeader/Header";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <GlobalMain>
        <Container>
          <Outlet />
        </Container>
      </GlobalMain>
    </>
  );
}