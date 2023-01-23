import { useDispatch } from "react-redux";
import { Loading } from "../../../../shared/components/Loading/Loading";
import { useAppSelector } from "../../../../shared/hooks/useAppSelector";
import { driversSelector } from "../../../Drivers/features/selector";
import { deleteCar } from "../../../Cars/features/actionCreators";
import { Car } from "../Car/Car";
import { CarsTableHeader } from "../CarsTableHeader/CarsTableHeader";

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
};

export const CarsTable = ({ cars }: ICars) => {
  const dispatch = useDispatch();
  const { drivers } = useAppSelector(driversSelector);
  
  if (!drivers) {
    return <Loading />
  };

  const getDriverFullName = (id: number) => {
    const driver = drivers.find(driver => driver.id === id);
    return `${driver?.first_name} ${driver?.last_name}`;
  };

  const onDelete = (carId: number, redirectID: number | null) => {
    dispatch(deleteCar(carId, redirectID))
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
        onDelete={onDelete}
        driverName={getDriverFullName(car.driver_id)}
      />)}
    </>
  );
};