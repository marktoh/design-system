import Image from "next/image";
import Background from "../public/backgrounds/blue-racing-car.png";
import navList from "./nav-list.json";
import products from "./products.json";

export default {
  navList,
  auth: {
    cover: <Image className="h-full object-cover" src={Background} alt="" />,
  },
  products,
};
