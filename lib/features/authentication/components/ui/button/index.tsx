import { FC, ButtonHTMLAttributes } from "react";
import { Loader } from "./loader";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
}
const Button: FC<ButtonProps> = ({ title, isLoading }) => {
  return (
    <button
      className="mt-3 select-none rounded-lg bg-blue-500 p-4 font-semibold text-white transition duration-500 hover:bg-blue-600 disabled:bg-blue-600"
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : title}
    </button>
  );
};

export { Button };
