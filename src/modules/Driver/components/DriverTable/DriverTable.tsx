import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Endpoints } from "../../../../api/endpoints";
import { deleteDriver } from "../../../Drivers/features/actionCreators";
import { Driver } from "../../../DriversCommon/components/Driver/Driver";
import { DriversTableHeader } from "../../../DriversCommon/components/DriversTableHeader/DriversTableHeader";
import { updateCurrentDriver } from "../../features/actionCreators";

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
  const navigate = useNavigate();

  const onDelete = (id: number) => {
    dispatch(deleteDriver(id));
    navigate(`/${Endpoints.DRIVERS}`)
  };

  const onUpdateDriverData = (id: number, driver: string) => {
    dispatch(updateCurrentDriver(id, driver));
  }

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
        onUpdate={onUpdateDriverData}
      />
    </>
  );
};