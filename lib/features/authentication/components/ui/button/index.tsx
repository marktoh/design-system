import { FC, ButtonHTMLAttributes } from "react";
import { Loader } from "./loader";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
}
const Button: FC<ButtonProps> = ({ title, isLoading }) => {
  return (
    <button
      className="mt-3 select-none rounded-lg bg-blue-400 px-4 py-3 font-semibold text-white hover:bg-blue-500 disabled:bg-blue-500"
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : title}
    </button>
  );
};

export { Button };
