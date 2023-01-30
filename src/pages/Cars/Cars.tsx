import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { AddCarButton, CarsHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { NotFound } from "../Notfound/NotFound";
import { Loading } from "../../shared/components/Loading/Loading";
import { requestDrivers } from "../../modules/Drivers/features/actionCreators";
import { getCars } from "../../modules/Cars/features/actionCreators";
import { CarsTable } from "../../modules/CarsCommon/components/CarsTable/CarsTable";
import { AddCarForm } from "../../modules/CarsCommon/components/AddCarForm/AddCarForm";
import { driversSelector } from "../../modules/Drivers/features/selector";
import { carsSelector } from "../../modules/Cars/features/selector";

export const Cars = () => {
  const dispatch = useDispatch();
  const { cars, isError, isLoading } = useAppSelector( carsSelector);
  const { drivers } = useAppSelector(driversSelector);
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  const toggleFormVisibility = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    dispatch(getCars())
    dispatch(requestDrivers());
  }, [dispatch]);

  if (!cars || !drivers || isLoading) {
    return <Loading />
  };  

  if (isError) {
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
        <AddCarForm onFinish={toggleFormVisibility} drivers={drivers} />
      </FormWrapper>
    </>
  );
};