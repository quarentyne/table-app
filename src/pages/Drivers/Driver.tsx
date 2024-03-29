import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loading } from "../../shared/components/Loading/Loading";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { NotFound } from "../Notfound/NotFound";
import { AddDriverForm } from "../../modules/DriversCommon/components/AddDriverForm/AddDriverForm";
import { DriverTable } from "../../modules/Driver/components/DriverTable/DriverTable";
import { driverSelector } from "../../modules/Driver/features/selector";
import { getDriverById } from "../../modules/Driver/features/actionCreators";

export const Driver = () => {
  const dispatch = useDispatch();
  const {driver, isError, isLoading} = useAppSelector(driverSelector)
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 
  const { id } = useParams();

  const toggleFormVisibility = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getDriverById(id))
  }, [dispatch, id]);  

  if (isLoading || !driver) {
    return <Loading />;
  };

  if (isError) {
    return <NotFound />
  };

  return (
    <>
      <DriversHeaderBlock>
        <span>{`${t("menu.drivers")} (${driver ? 1 : 0})`}</span>
        <AddDriverButton onClick={toggleFormVisibility}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriverTable driver={driver}/>
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm closeForm={toggleFormVisibility}/>
      </FormWrapper>
    </>
  );
};