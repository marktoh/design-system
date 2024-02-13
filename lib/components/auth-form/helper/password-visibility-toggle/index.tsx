import { FC, MouseEvent } from "react";
import { Eye } from "../icons/eye";
import { EyeSlash } from "../icons/eye-slash";

interface TogglePasswordVisibilityToggleProps {
  isHidden: boolean;
  handleClick: (e: MouseEvent<HTMLElement>) => void;
}
const TogglePasswordVisibilityToggle: FC<
  TogglePasswordVisibilityToggleProps
> = ({ isHidden, handleClick }) => {
  return (
    <div
      className={`absolute right-4 inline-flex h-full cursor-pointer items-center text-slate-300`}
      onClick={handleClick}
    >
      {isHidden ? <EyeSlash /> : <Eye />}
    </div>
  );
};

export { TogglePasswordVisibilityToggle };
