import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { requestDrivers } from "../../modules/driver/selectors";
import { DriversTableHeader } from "../../shared/components/driversTable/DriversTableHeader";
import { Loading } from "../../shared/components/loading/Loading";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";
import { AddDriverButton, DriversHeaderBlock, FormWrapper } from "./styles";
import add from "../../assets/svg/add.svg";
import { AddDriverForm } from "../../shared/components/addDriverForm/AddDriverForm";

export const Drivers = () => {
  const dispatch = useDispatch();
  const drivers = useTypedSelector(state => state.drivers)
  const { t } = useTranslation();
  const [isVisibleForm, setIsVisibleForm] = useState(false); 

  useEffect(() => {
    dispatch(requestDrivers())
  }, [dispatch]);

  if (drivers.loading) {
    return <Loading />
  }

  return (
    <div>
      <DriversHeaderBlock>
        <span>{t("menu.drivers") + ' (' + drivers.data.length + ')'}</span>
        <AddDriverButton onClick={() => setIsVisibleForm(true)}>
          <img src={add} width={15} height={15} alt="add"/>{t("menu.addDriver")}
        </AddDriverButton>
      </DriversHeaderBlock>
      <DriversTableHeader />
      <FormWrapper isVisible={isVisibleForm}>
        <AddDriverForm onFinish={() => setIsVisibleForm(false)}/>
      </FormWrapper>
    </div>
  );
};