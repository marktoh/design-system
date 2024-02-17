import {
  FiLogIn as LogInIcon,
  FiUser as SignUpIcon,
  FiUnlock as ForgotPasswordIcon,
  FiGift as ProductsIcon,
} from "react-icons/fi";

const navList = [
  {
    href: "/login",
    title: "Login",
    icon: <LogInIcon />,
  },
  {
    href: "/sign-up",
    title: "Sign Up",
    icon: <SignUpIcon />,
  },
  {
    href: "/forgot-password",
    title: "Forgot Password",
    icon: <ForgotPasswordIcon />,
  },
  {
    href: "/products",
    title: "Products",
    icon: <ProductsIcon />,
  },
];

export default navList;
