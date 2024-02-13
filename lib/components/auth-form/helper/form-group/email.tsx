import { FC } from "react";
import { FormGroup } from ".";

const EmailFormGroup: FC = () => {
  return (
    <FormGroup
      label={{
        htmlFor: "email",
        value: "Email",
      }}
      input={{
        id: "email",
        type: "email",
        placeholder: "johndoe@gmail.com",
        dataTestId: "email",
      }}
    />
  );
};

export { EmailFormGroup };
