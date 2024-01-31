// Referenced from '@/lib/components/auth-form/Link.tsx
const LoginRoute = {
  href: "/login",
  title: "Log In",
};
const SignUpRoute = {
  href: "/sign-up",
  title: "Sign Up",
};
const ForgotPasswordRoute = {
  href: "/forgot-password",
  title: "Forgot Password",
};

/**
 * Returns to the original route
 */
function navigateToRouteAndVerify(route) {
  cy.get("a").contains(route.title).click();
  cy.location("pathname").should("equal", route.href);
}
/**
 * Navigates to auxiliary links and returns to the original page
 */
function navigateToAndFro(originalRoute, firstRoute, secondRoute) {
  cy.visit(`http://localhost:3000${originalRoute.href}`);
  navigateToRouteAndVerify(firstRoute);
  navigateToRouteAndVerify(originalRoute);
  navigateToRouteAndVerify(secondRoute);
  navigateToRouteAndVerify(originalRoute);
}

export { LoginRoute, SignUpRoute, ForgotPasswordRoute, navigateToAndFro };
