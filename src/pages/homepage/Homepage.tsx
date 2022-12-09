import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { requestCars, requestDrivers } from "../../sagas/actions";
import people from "../../assets/main-people.svg";
import car from "../../assets/main-car.svg";
import styles from "./Homepage.module.scss";

export const Homepage: FC = () => {
  const driversCount: number = useTypedSelector(state => state.drivers.data.length);
  const carsCount: number = useTypedSelector(state => state.cars.data.length);
  const language = useTypedSelector(state => state.language.language.menu)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCars());
  }, [dispatch]);
  useEffect(() => {
    dispatch(requestDrivers());
  }, [dispatch]);

  return (
    <div className={styles.homepage}>
      <p>{language.welcome}</p>
      <div className={styles.homepage__wrapper}>
        <span className={styles.homepage__statistic}>
          {language.statistics}
        </span>
        <div className={styles.homepage__data}>
          <div className={styles.homepage__object}>
            <div className={styles.homepage__image}>
              <img src={people} width={35} height={35} alt={'drivers'} />
            </div>            
            <span>{driversCount} {language.drivers}</span>
          </div>
          <div className={styles.homepage__object}>
            <div className={styles.homepage__image}>
              <img src={car} width={35} height={35} alt={'cars'} />
            </div>             
            <span>{carsCount} {language.cars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};