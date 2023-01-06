import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDrivers } from "../../modules/driver/selectors";
import { DriversTableHeader } from "../../modules/driver/components/driversTable/DriversTableHeader";
import { Loading } from "../../shared/components/loading/Loading";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { AddDriverForm } from "../../modules/driver/components/addDriverForm/AddDriverForm";
import { Driver } from "../../modules/driver/components/driver/Driver";

export const Drivers = () => {
  const dispatch = useDispatch();
  const drivers = useTypedSelector(state => state.drivers)
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 
  const { id } = useParams();

  const toggleFormVisability = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    dispatch(requestDrivers(Number(id)))
  }, [dispatch, id]);

  if (drivers.loading || drivers.status === 'idle') {
    return <Loading />
  };

  return (
    <>
      <DriversHeaderBlock>
        <span>{`${t("menu.drivers")} (${drivers.data.length})`}</span>
        <AddDriverButton onClick={toggleFormVisability}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriversTableHeader />
      {drivers.data.map(driver =>
        <Driver
          key={driver.id}
          id={driver.id}
          status={driver.status}
          first_name={driver.first_name}
          last_name={driver.last_name}
          date_birth={driver.date_birth}
          date_created={driver.date_created} />
      )}
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm onFinish={toggleFormVisability}/>
      </FormWrapper>
    </>
  );
};