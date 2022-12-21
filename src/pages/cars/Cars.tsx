import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { requestCars } from "../../modules/car/selectors";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddCarButton, CarsHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { CarsTableHeader } from "../../modules/car/components/carsTable/CarsTableHeader";
import { Car } from "../../modules/car/components/car/Car";
import { requestDrivers } from "../../modules/driver/selectors";
import { AddCarForm } from "../../modules/car/components/addCar/AddCarForm";
import { Loading } from "../../shared/components/loading/Loading";

export const Cars = () => {
  const dispatch = useDispatch();
  const cars = useTypedSelector(state => state.cars)
  const { state } = useLocation();  
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  useEffect(() => {
    dispatch(requestCars(state));
    dispatch(requestDrivers());
  }, [dispatch, state]);

  if (cars.loading || cars.status === 'idle') {
    return <Loading />
  };

  const checkState = (id: number) => { 
    if (state) {
      return id;
    };
    return;
  };

  return (
    <>
      <CarsHeaderBlock>
        <span>{t("menu.cars") + " (" + cars.data.length + ")"}</span>
        <AddCarButton onClick={() => setIsVisibleForm(true)}>
          <img src={add} width={15} height={15} alt="add" />
          {t("menu.addCar")}
        </AddCarButton>
      </CarsHeaderBlock>
      <CarsTableHeader />
      {cars.data.map(car => {
        let targetID = checkState(car.driver_id);
        return (<Car
          key={car.id}
          id={car.id}
          driver_id={car.driver_id}
          mark={car.mark}
          model={car.model}
          number={car.number}
          status={car.status}
          year={car.year}
          targetId={targetID}
        />);
      })}
      <FormWrapper isVisible={isVisibleForm}>
        <AddCarForm onFinish={() => setIsVisibleForm(false)}/>
      </FormWrapper>
    </>
  );
};