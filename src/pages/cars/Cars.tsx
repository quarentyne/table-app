import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddCarButton, CarsHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { NotFound } from "../Notfound/NotFound";
import { Loading } from "../../shared/components/dLoading/Loading";
import { requestDrivers } from "../../modules/Drivers/features/actionCreators";
import { requestCars, requestCarsById } from "../../modules/Cars/features/actionCreators";
import { CarsTable } from "../../modules/Cars/components/CarsTable/CarsTable";
import { AddCarForm } from "../../modules/Cars/components/AddCarForm/AddCarForm";
import { driversSelector } from "../../modules/Drivers/features/selector";
import { carsSelector } from "../../modules/Cars/features/selector";

export const Cars = () => {
  const dispatch = useDispatch();
  const carsState = useTypedSelector(carsSelector);
  const driversState = useTypedSelector(driversSelector);
  const { state } = useLocation();  
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  const toggleFormVisibility = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    if (state) {
      dispatch(requestCarsById(state));      
    } else {
      dispatch(requestCars());      
    }
    dispatch(requestDrivers());
  }, [dispatch, state]);

  if (!carsState.data || !driversState.data) {
    return <Loading />
  };  

  if (carsState.is_error) {
    return <NotFound />
  };

  return (
    <>
      <CarsHeaderBlock>
        <span>{`${t("menu.cars")} (${carsState.data.length})`}</span>
        <AddCarButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add" />
          {t("menu.addCar")}
        </AddCarButton>
      </CarsHeaderBlock>
      <CarsTable cars={carsState.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddCarForm onFinish={toggleFormVisibility} redirectID={state} drivers={driversState.data} />
      </FormWrapper>
    </>
  );
};