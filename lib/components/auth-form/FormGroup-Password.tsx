"use client";
import { FC, useState, MouseEvent } from "react";
import FormGroup from "./FormGroup";
import { TogglePasswordVisibilityIcon } from "./helper/password-form";

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
        <TogglePasswordVisibilityIcon
          isHidden={isHidden}
          handleClick={handleClick}
        />
      }
    />
  );
};

export default PasswordFormGroup;
