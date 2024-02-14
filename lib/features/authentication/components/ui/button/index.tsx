import { FC } from "react";

interface ButtonProps {
  title: string;
}
const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <button className="mt-3 select-none rounded-lg bg-blue-400 px-4 py-3 font-semibold text-white hover:bg-blue-500">
      {title}
    </button>
  );
};

export { Button };
