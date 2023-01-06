import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { requestCars } from "../../modules/car/selectors";
import { requestDrivers } from "../../modules/driver/selectors";
import { DataBlock, DataImage, DataObject, HomepageBlock, HomepageLabel, HomepageParagraph, HomepageWrapper } from "./styles";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import people from "../../assets/svg/main-people.svg";
import car from "../../assets/svg/main-car.svg";

export const Home = () => { 
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const driversCount: number = useTypedSelector(state => state.drivers.data.length);
  const carsCount: number = useTypedSelector(state => state.cars.data.length);

  useEffect(() => {
    dispatch(requestCars());
  }, [dispatch]);
  useEffect(() => {
    dispatch(requestDrivers());
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
            <span>{`${t("menu.drivers")}: ${driversCount}`}</span>
          </DataObject>
          <DataObject>
            <DataImage>
              <img src={car} width={35} height={35} alt={'cars'} />
            </DataImage>             
            <span>{`${t("menu.cars")}: ${carsCount}`}</span>
          </DataObject>
        </DataBlock>
      </HomepageWrapper>
    </HomepageBlock>
  );
};