import { useDispatch } from "react-redux";
import { Driver } from "../../../DriversCommon/components/Driver/Driver";
import { DriversTableHeader } from "../../../DriversCommon/components/DriversTableHeader/DriversTableHeader";
import { deleteDriver } from "../../features/actionCreators";

interface IDriver {
  driver: {
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
};

export const DriverTable = ({ driver }: IDriver) => { 
  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(deleteDriver(id));
  };

  return (
    <>
      <DriversTableHeader />
      <Driver
        key={driver.id}
        id={driver.id}
        firstName={driver.first_name}
        lastName={driver.last_name}
        dateBirth={driver.date_birth}
        dateCreated={driver.date_created}
        status={driver.status}
        onDelete={onDelete}
      />
    </>
  );
};