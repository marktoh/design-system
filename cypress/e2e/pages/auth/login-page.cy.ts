describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  context("UI", () => {
    it("shows the correct UI", () => {
      cy.get("h1").contains("Log in to your account");
      cy.get("label").eq(0).contains("Email");
      cy.get("label").eq(1).contains("Password");
      cy.get("label").should("have.length", 2);
      cy.get("button").contains("Continue");
      cy.get("a").eq(0).contains("Sign Up");
      cy.get("a").eq(1).contains("Forgot Password");
    });
  });
  context("JS", () => {
    it("allows a user to log in", () => {
      cy.getByData("email").type("johndoe@gmail.com {enter}");
      cy.getByData("password").type("aprettylongpassword {enter}");
      cy.focused().should("have.attr", "data-testid", "password");
    });
    it("detects an invalid email address", () => {
      cy.getByData("email").type("johndoe {enter}");
      cy.getByData("password").type("aprettylongpassword {enter}");
      cy.focused().should("have.attr", "data-testid", "email");
    });
    it("navigates to Sign Up page on Sign Up click", () => {
      cy.get("a").eq(0).contains("Sign Up").click();
      cy.location("pathname").should("equal", "/sign-up");
    });
    it("navigates to Forgot Password page on Forgot Password click", () => {
      cy.get("a").eq(1).contains("Forgot Password").click();
      cy.location("pathname").should("equal", "/forgot-password");
    });
  });
});
