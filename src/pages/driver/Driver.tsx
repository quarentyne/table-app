import { FC } from "react";
import { DriverName } from "../../components/driverName/DriverName";
import { DriverStatus } from "../../components/driverStatus/DriverStatus";

export const Driverpage: FC = () => {
  return (
    <div>
      <DriverName firstName="Oleh" lastName="Kukuruza" />
      <DriverStatus value="active"/>
    </div>
  );
};