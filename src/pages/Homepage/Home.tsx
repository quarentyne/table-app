import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { DataBlock, DataImage, DataObject, HomepageBlock, HomepageLabel, HomepageParagraph, HomepageWrapper } from "./styles";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import people from "../../assets/svg/main-people.svg";
import car from "../../assets/svg/main-car.svg";
import { getDrivers } from "../../modules/Drivers/features/actionCreators";
import { getCars } from "../../modules/Cars/features/actionCreators";
import { driversSelector } from "../../modules/Drivers/features/selector";
import { carsSelector } from "../../modules/Cars/features/selector";

export const Home = () => { 
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { drivers } = useAppSelector(driversSelector);
  const { cars } = useAppSelector(carsSelector);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <HomepageBlock>
      <HomepageParagraph>{t("menu.welcome")}</HomepageParagraph>
      <HomepageWrapper>
        <HomepageLabel>
          {t("menu.statistics")}
        </HomepageLabel>
        <DataBlock>
          <DataObject>
            <DataImage>
              <img src={people} width={35} height={35} alt={'drivers'} />
            </DataImage>           
            <span>{`${t("menu.drivers")}: ${drivers?.length || 0}`}</span>
          </DataObject>
          <DataObject>
            <DataImage>
              <img src={car} width={35} height={35} alt={'cars'} />
            </DataImage>             
            <span>{`${t("menu.cars")}: ${cars?.length || 0}`}</span>
          </DataObject>
        </DataBlock>
      </HomepageWrapper>
    </HomepageBlock>
  );
};