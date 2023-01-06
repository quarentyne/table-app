import { useDispatch } from "react-redux";
import { deleteDriver } from "../../selectors";
import { Driver } from "../driver/Driver";
import { DriversTableHeader } from "../driversTableHeader/DriversTableHeader";

interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: {
    code: string;
    title: string;
  };
};

interface IDrivers {
  drivers: IDriver[];
  checkRedirect: (id: number) => number | undefined;
}

export const DriversTable = ({drivers, checkRedirect}: IDrivers) => { 
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(deleteDriver(id));
  };

  return (
    <>
      <DriversTableHeader />
      {drivers.map(driver => <Driver 
        key={driver.id}
        id={driver.id}
        first_name={driver.first_name}
        last_name={driver.last_name}
        date_birth={driver.date_birth}
        date_created={driver.date_created}
        driverStatus={driver.status}
        onDelete={onDelete}
        targetId={checkRedirect(driver.id)}
      />)}
    </>
  );
};