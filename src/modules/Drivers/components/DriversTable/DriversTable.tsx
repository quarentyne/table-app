import { useDispatch } from "react-redux";
import { Driver } from "../../../DriversCommon/components/Driver/Driver";
import { DriversTableHeader } from "../../../DriversCommon/components/DriversTableHeader/DriversTableHeader";
import { deleteDriver, updateDriverData } from "../../features/actionCreators";

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
}

export const DriversTable = ({drivers}: IDrivers) => { 
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(deleteDriver(id));
  };

  const onUpdateDriverData = (id: number, driver: string) => {
    dispatch(updateDriverData(id, driver));
  }

  return (
    <>
      <DriversTableHeader />
      {drivers.map(driver => <Driver
        key={driver.id}
        id={driver.id}
        firstName={driver.first_name}
        lastName={driver.last_name}
        dateBirth={driver.date_birth}
        dateCreated={driver.date_created}
        status={driver.status}
        onDelete={onDelete}
        onUpdate={onUpdateDriverData}
      />
      )}
    </>
  );
};