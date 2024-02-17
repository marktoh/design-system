import Image from "next/image";
import Background from "../public/backgrounds/flower.jpg";
import navList from "./nav-list";
import products from "./products.json";

export default {
  navList,
  auth: {
    pageBackground: (
      <Image className="h-full object-cover" src={Background} alt="" />
    ),
  },
  products,
};
