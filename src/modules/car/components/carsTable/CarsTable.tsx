import { useDispatch } from "react-redux";
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

  const onDeleteCar = (carId: number, redirectTargetId?: number) => {
    dispatch(deleteCar(carId, redirectTargetId))
  };

  return (
    <>
      <CarsTableHeader />
      {cars.map(car => <Car
        key={car.id}
        id={car.id}
        driver_id={car.driver_id}
        mark={car.mark}
        model={car.model}
        number={car.number}
        status={car.status}
        year={car.year}
        targetId={checkRedirect(car.driver_id)}
        onDelete={onDeleteCar}
      />)}
    </>
  );
};