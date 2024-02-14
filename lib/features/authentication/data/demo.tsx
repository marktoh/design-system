import NextImage from "next/image";
import Background from "./assets/flower.jpg";

const demo = {
  pageBackground: (
    <NextImage className="h-full object-cover" src={Background} alt="" />
  ),
};

export { demo };
