import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loading } from "../../shared/components/Loading/Loading";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { NotFound } from "../Notfound/NotFound";
import { AddDriverForm } from "../../modules/DriversCommon/components/AddDriverForm/AddDriverForm";
import { DriverTable } from "../../modules/Driver/components/DriverTable/DriverTable";
import { requestDriverById } from "../../modules/Driver/features/actionCreators";
import { driverSelector } from "../../modules/Driver/features/selector";

export const Driver = () => {
  const dispatch = useDispatch();
  const driverState = useTypedSelector(driverSelector)
  const { state } = useLocation();
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 
  const { id } = useParams();

  const toggleFormVisibility = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    dispatch(requestDriverById(Number(id)))
  }, [dispatch, id]);  
  
  if (!driverState.data) {
    return <Loading />;
  };

  if (driverState.is_error) {
    return <NotFound />
  };

  return (
    <>
      <DriversHeaderBlock>
        <span>{`${t("menu.drivers")} (${driverState.data ? 1 : 0})`}</span>
        <AddDriverButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriverTable driver={driverState.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm onFinish={toggleFormVisibility}/>
      </FormWrapper>
    </>
  );
};