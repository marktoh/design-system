import { FC, useState, MouseEvent } from "react";
import { FormGroup } from ".";
import { PasswordVisibilityToggle } from "../password-visibility-toggle";

const PasswordFormGroup: FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsHidden((prev) => !prev);
  };
  return (
    <FormGroup
      label={{
        htmlFor: "password",
        value: "Password",
      }}
      input={{
        id: "password",
        type: isHidden ? "password" : "text",
        placeholder: "•••••••••",
        dataTestId: "password",
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

export { PasswordFormGroup };
