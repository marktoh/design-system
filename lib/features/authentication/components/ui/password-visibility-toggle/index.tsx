import { FC, MouseEvent } from "react";
import { Eye } from "./assets/eye";
import { EyeSlash } from "./assets/eye-slash";

interface PasswordVisibilityToggleProps {
  isHidden: boolean;
  handleClick: (e: MouseEvent<HTMLElement>) => void;
}
const PasswordVisibilityToggle: FC<PasswordVisibilityToggleProps> = ({
  isHidden,
  handleClick,
}) => {
  return (
    <div
      className={`absolute right-4 inline-flex h-full cursor-pointer items-center text-slate-700`}
      onClick={handleClick}
    >
      {isHidden ? <EyeSlash /> : <Eye />}
    </div>
  );
};

export { PasswordVisibilityToggle };
