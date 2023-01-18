import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { requestCars } from "../../modules/car/selectors";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddCarButton, CarsHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { requestDrivers } from "../../modules/driver/selectors";
import { AddCarForm } from "../../modules/car/components/addCar/AddCarForm";
import { Loading } from "../../shared/components/loading/Loading";
import { CarsTable } from "../../modules/car/components/carsTable/CarsTable";

export const Cars = () => {
  const dispatch = useDispatch();
  const cars = useTypedSelector(state => state.cars)
  const { state } = useLocation();  
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  const toggleFormVisability = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    dispatch(requestCars(state));
    dispatch(requestDrivers());
  }, [dispatch, state]);

  if (cars.loading || cars.status === 'idle') {
    return <Loading />
  };  

  return (
    <>
      <CarsHeaderBlock>
        <span>{`${t("menu.cars")} (${cars.data.length})`}</span>
        <AddCarButton onClick={toggleFormVisability}>
          <img src={add} width={15} height={15} alt="add" />
          {t("menu.addCar")}
        </AddCarButton>
      </CarsHeaderBlock>
      <CarsTable cars={cars.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddCarForm onFinish={toggleFormVisability} redirectID={state} />
      </FormWrapper>
    </>
  );
};