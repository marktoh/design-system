import { FC } from "react";
import FormGroup from "./FormGroup";

const ConfirmPasswordFormGroup: FC = () => {
  return (
    <FormGroup
      label={{
        htmlFor: "confirm-password",
        value: "Confirm Password",
      }}
      input={{
        id: "confirm-password",
        type: "password",
        placeholder: "•••••••••",
        dataTestId: "confirm-password",
      }}
    />
  );
};

export default ConfirmPasswordFormGroup;
