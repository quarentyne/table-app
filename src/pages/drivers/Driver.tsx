import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDriverById } from "../../modules/Driver/actions";
import { Loading } from "../../shared/components/Loading/Loading";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { AddDriverForm } from "../../modules/Driver/components/AddDriverForm/AddDriverForm";
import { DriversTable } from "../../modules/Driver/components/DriversTable/DriversTable";
import { NotFound } from "../Notfound/NotFound";

export const Driver = () => {
  const dispatch = useDispatch();
  const drivers = useTypedSelector(state => state.drivers)
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
  
  if (!drivers.data) {
    return <Loading />;
  };

  if (drivers.is_error) {
    return <NotFound />
  };

  return (
    <>
      <DriversHeaderBlock>
        <span>{`${t("menu.drivers")} (${drivers.data.length})`}</span>
        <AddDriverButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriversTable drivers={drivers.data} isRedirectable={state} />
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm onFinish={toggleFormVisibility}/>
      </FormWrapper>
    </>
  );
};