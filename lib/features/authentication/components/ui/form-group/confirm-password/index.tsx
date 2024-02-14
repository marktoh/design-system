import { FC } from "react";
import { FormGroup } from "../templates/base";
import { PasswordVisibilityToggle } from "../../password-visibility-toggle";
import { usePasswordVisiblity, getInputType } from "../helpers/password";

const ConfirmPasswordFormGroup: FC = () => {
  const [isHidden, toggle] = usePasswordVisiblity();
  return (
    <FormGroup
      label={{
        htmlFor: "confirm-password",
        value: "Confirm Password",
      }}
      input={{
        id: "confirm-password",
        type: getInputType(isHidden),
        placeholder: "•••••••••",
        dataTestId: "confirm-password",
      }}
      icon={
        <PasswordVisibilityToggle isHidden={isHidden} handleClick={toggle} />
      }
    />
  );
};

export { ConfirmPasswordFormGroup };
