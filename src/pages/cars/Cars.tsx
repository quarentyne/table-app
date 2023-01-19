import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { requestCars, requestCarsById } from "../../modules/Car/actions";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddCarButton, CarsHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { AddCarForm } from "../../modules/Car/components/AddCarForm/AddCarForm";
import { CarsTable } from "../../modules/Car/components/CarsTable/CarsTable";
import { NotFound } from "../Notfound/NotFound";
import { Loading } from "../../shared/components/Loading/Loading";
import { requestDrivers } from "../../modules/Drivers/features/actionCreators";

export const Cars = () => {
  const dispatch = useDispatch();
  const cars = useTypedSelector(state => state.cars);
  const drivers = useTypedSelector(state => state.drivers.data);
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

  if (!cars.data || !drivers) {
    return <Loading />
  };  

  if (cars.is_error) {
    return <NotFound />
  };

  return (
    <>
      <CarsHeaderBlock>
        <span>{`${t("menu.cars")} (${cars.data.length})`}</span>
        <AddCarButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add" />
          {t("menu.addCar")}
        </AddCarButton>
      </CarsHeaderBlock>
      <CarsTable cars={cars.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddCarForm onFinish={toggleFormVisibility} redirectID={state} drivers={drivers} />
      </FormWrapper>
    </>
  );
};