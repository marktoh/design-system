import {
  LoginRoute,
  SignUpRoute,
  ForgotPasswordRoute,
  navigateToAndFro,
} from "./helper/auth-journey";

describe("User Journey", () => {
  context("Between Auth Pages", () => {
    it("Goes from Login to ['Sign Up', 'Forgot Password']", () => {
      navigateToAndFro(LoginRoute, SignUpRoute, ForgotPasswordRoute);
    });
    it("Goes from Sign Up to ['Login', 'Forgot Password']", () => {
      navigateToAndFro(SignUpRoute, LoginRoute, ForgotPasswordRoute);
    });
    it("Goes from Forgot Password to ['Login', 'Sign Up']", () => {
      navigateToAndFro(ForgotPasswordRoute, LoginRoute, SignUpRoute);
    });
  });
});
