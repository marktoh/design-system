import { useState, MouseEvent } from "react";
type ReturnType = [boolean, (e: MouseEvent<HTMLElement>) => void];
const usePasswordVisiblity = (): ReturnType => {
  const [isHidden, setIsHidden] = useState(true);
  const toggle = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsHidden((prev) => !prev);
  };
  return [isHidden, toggle];
};
const getInputType = (isHidden: boolean) => (isHidden ? "password" : "text");

export { usePasswordVisiblity, getInputType };
