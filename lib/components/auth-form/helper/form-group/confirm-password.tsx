import { FC, useState, MouseEvent } from "react";
import { FormGroup } from ".";
import { PasswordVisibilityToggle } from "../password-visibility-toggle";

const ConfirmPasswordFormGroup: FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsHidden((prev) => !prev);
  };
  return (
    <FormGroup
      label={{
        htmlFor: "confirm-password",
        value: "Confirm Password",
      }}
      input={{
        id: "confirm-password",
        type: isHidden ? "password" : "text",
        placeholder: "•••••••••",
        dataTestId: "confirm-password",
      }}
      icon={
        <PasswordVisibilityToggle
          isHidden={isHidden}
          handleClick={handleClick}
        />
      }
    />
  );
};

export { ConfirmPasswordFormGroup };
