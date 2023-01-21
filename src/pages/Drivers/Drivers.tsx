import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loading } from "../../shared/components/Loading/Loading";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { NotFound } from "../Notfound/NotFound";
import { requestDrivers } from "../../modules/Drivers/features/actionCreators";
import { AddDriverForm } from "../../modules/DriversCommon/components/AddDriverForm/AddDriverForm";
import { DriversTable } from "../../modules/Drivers/components/DriversTable/DriversTable";
import { driversSelector } from "../../modules/Drivers/features/selector";

export const Drivers = () => {
  const dispatch = useDispatch();
  const driversState = useTypedSelector(driversSelector)
  const { state } = useLocation();
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  const toggleFormVisibility = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    dispatch(requestDrivers());
  }, [dispatch]);
  
  if (!driversState.data) {
    return <Loading />;
  };

  if (driversState.is_error) {
    return <NotFound />
  };  

  return (
    <>
      <DriversHeaderBlock>
        <span>{`${t("menu.drivers")} (${driversState.data.length})`}</span>
        <AddDriverButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriversTable drivers={driversState.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm onFinish={toggleFormVisibility}/>
      </FormWrapper>
    </>
  );
};