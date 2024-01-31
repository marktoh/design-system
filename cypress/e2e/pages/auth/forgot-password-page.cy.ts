describe("ForgotPassword Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/forgot-password");
  });
  context("UI", () => {
    it("shows the correct UI", () => {
      cy.get("h1").contains("Reset Password");
      cy.get("label").eq(0).contains("Email");
      cy.get("label").should("have.length", 1);
      cy.get("button").contains("Get Reset Password Link");
      cy.get("a").eq(0).contains("Log In");
      cy.get("a").eq(1).contains("Sign Up");
    });
  });
  context("JS", () => {
    it("allows a user to log in", () => {
      cy.getByData("email").type("johndoe@gmail.com {enter}");
      cy.focused().should("have.attr", "data-testid", "email");
    });
    it("detects an invalid email address", () => {
      cy.getByData("email").type("johndoe {enter}");
      cy.focused().should("have.attr", "data-testid", "email");
    });
    it("navigates to Login page on Log In click", () => {
      cy.get("a").eq(0).contains("Log In").click();
      cy.location("pathname").should("equal", "/login");
    });
    it("navigates to Sign Up page on Sign Up click", () => {
      cy.get("a").eq(1).contains("Sign Up").click();
      cy.location("pathname").should("equal", "/sign-up");
    });
  });
});
