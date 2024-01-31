import { FC } from "react";
import FormGroup from "./FormGroup";

const PasswordFormGroup: FC = () => {
  return (
    <FormGroup
      label={{
        htmlFor: "password",
        value: "Password",
      }}
      input={{
        id: "password",
        type: "password",
        placeholder: "•••••••••",
        dataTestId: "password",
      }}
    />
  );
};

export default PasswordFormGroup;
