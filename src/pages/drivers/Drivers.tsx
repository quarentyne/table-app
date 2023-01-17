import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDrivers } from "../../modules/driver/selectors";
import { Loading } from "../../shared/components/loading/Loading";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { AddDriverForm } from "../../modules/driver/components/addDriverForm/AddDriverForm";
import { DriversTable } from "../../modules/driver/components/driversTable/DriversTable";
import { NotFound } from "../notfound/NotFound";

export const Drivers = () => {
  const dispatch = useDispatch();
  const drivers = useTypedSelector(state => state.drivers)
  const { state } = useLocation();
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
    return <Loading />;
  };

  if (drivers.is_error) {
    return <NotFound />
  };

  return (
    <>
      <DriversHeaderBlock>
        <span>{`${t("menu.drivers")} (${drivers.data.length})`}</span>
        <AddDriverButton onClick={toggleFormVisability}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriversTable drivers={drivers.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm onFinish={toggleFormVisability}/>
      </FormWrapper>
    </>
  );
};