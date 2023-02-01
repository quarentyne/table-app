import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { AddCarButton, CarsHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { NotFound } from "../Notfound/NotFound";
import { Loading } from "../../shared/components/Loading/Loading";
import { getDrivers } from "../../modules/Drivers/features/actionCreators";
import { AddCarForm } from "../../modules/CarsCommon/components/AddCarForm/AddCarForm";
import { driversSelector } from "../../modules/Drivers/features/selector";
import { driversCarsSelector } from "../../modules/DriversCars/features/selector";
import { addDriversCar, getDriversCars } from "../../modules/DriversCars/features/actionCreators";
import { CarsTable } from "../../modules/DriversCars/components/CarsTable/CarsTable";

export const DriversCars = () => {
  const dispatch = useDispatch();
  const { driverId } = useParams();
  const { cars, isError, isLoading } = useAppSelector(driversCarsSelector);
  const { drivers } = useAppSelector(driversSelector);
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  const toggleFormVisibility = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  const addNewCar = (car: string) => {
    dispatch(addDriversCar(car));
  };

  useEffect(() => {
    if (!driverId) {
      return;
    };
    dispatch(getDriversCars(driverId));     
    dispatch(getDrivers());
  }, [dispatch, driverId]);

  if (!cars || !drivers || isLoading) {
    return <Loading />
  };  

  if (isError || !driverId) {
    return <NotFound />
  };

  return (
    <>
      <CarsHeaderBlock>
        <span>{`${t("menu.cars")} (${cars.length})`}</span>
        <AddCarButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add" />
          {t("menu.addCar")}
        </AddCarButton>
      </CarsHeaderBlock>
      <CarsTable cars={cars} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddCarForm closeForm={toggleFormVisibility} onAdd={addNewCar} drivers={drivers} />
      </FormWrapper>
    </>
  );
};