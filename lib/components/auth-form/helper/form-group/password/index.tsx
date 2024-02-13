import { FC } from "react";
import { FormGroup } from "../helper/base";
import { PasswordVisibilityToggle } from "../../password-visibility-toggle";
import { usePasswordVisiblity, getInputType } from "../helper/password";

const PasswordFormGroup: FC = () => {
  const [isHidden, toggle] = usePasswordVisiblity();
  return (
    <FormGroup
      label={{
        htmlFor: "password",
        value: "Password",
      }}
      input={{
        id: "password",
        type: getInputType(isHidden),
        placeholder: "•••••••••",
        dataTestId: "password",
      }}
      icon={
        <PasswordVisibilityToggle isHidden={isHidden} handleClick={toggle} />
      }
    />
  );
};

export { PasswordFormGroup };
