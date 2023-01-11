import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../shared/hooks/useTypedSelector";
import { deleteCar } from "../../selectors";
import { Car } from "../car/Car";
import { CarsTableHeader } from "../carsTableHeader/CarsTableHeader";

interface ICar{
  id: string;
  model: string,
  mark: string,
  year: number,
  number: string,
  driver_id: number,
  status: {
    title: string,
    code: string,
  },
};

interface ICars { 
  cars: ICar[];
  checkRedirect: (id: number) => number | undefined;
};

export const CarsTable = ({ cars, checkRedirect}: ICars) => {
  const dispatch = useDispatch();
  const drivers = useTypedSelector(state => state.drivers.data);

  const getDriverFullName = (id: number) => {
    const driver = drivers.find(driver => driver.id === id);
    return `${driver?.first_name} ${driver?.last_name}`;
  };

  const onDelete = (carId: number, redirectTargetId?: number) => {
    dispatch(deleteCar(carId, redirectTargetId))
  };

  return (
    <>
      <CarsTableHeader />
      {cars.map(car => <Car
        key={car.id}
        id={car.id}
        driverId={car.driver_id}
        mark={car.mark}
        model={car.model}
        number={car.number}
        status={car.status}
        year={car.year}
        targetId={checkRedirect(car.driver_id)}
        onDelete={onDelete}
        driverName={getDriverFullName(car.driver_id)}
      />)}
    </>
  );
};