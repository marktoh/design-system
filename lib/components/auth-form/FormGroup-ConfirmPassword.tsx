import { FC, useState, MouseEvent } from "react";
import FormGroup from "./FormGroup";
import { TogglePasswordVisibilityIcon } from "./helper/password-form";

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
        <TogglePasswordVisibilityIcon
          isHidden={isHidden}
          handleClick={handleClick}
        />
      }
    />
  );
};

export default ConfirmPasswordFormGroup;
