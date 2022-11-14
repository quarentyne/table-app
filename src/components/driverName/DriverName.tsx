import { ReactElement} from "react";
import { EditedData } from "../editedData/EditedData";

interface IDriverName{
  firstName: string;
  lastName: string;
}

export const DriverName = ({ firstName, lastName }: IDriverName): ReactElement => {
  return (
    <div>
      <EditedData value={firstName} /> <EditedData value={lastName} />
    </div>
  );
};