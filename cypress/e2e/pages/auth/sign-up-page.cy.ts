describe("SignUp Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/sign-up");
  });
  context("UI", () => {
    it("shows the correct UI", () => {
      cy.get("h1").contains("Sign Up for Free");
      cy.get("label").eq(0).contains("Email");
      cy.get("label").eq(1).contains("Password");
      cy.get("label").eq(2).contains("Confirm Password");
      cy.get("label").should("have.length", 3);
      cy.get("button").contains("Continue");
      cy.get("a").eq(0).contains("Log In");
      cy.get("a").eq(1).contains("Forgot Password");
    });
  });
  context("JS", () => {
    it("allows a user to log in", () => {
      cy.getByData("email").type("johndoe@gmail.com {enter}");
      cy.getByData("password").type("aprettylongpassword {enter}");
      cy.getByData("confirm-password").type("aprettylongpassword {enter}");
      cy.focused().should("have.attr", "data-testid", "confirm-password");
    });
    it("detects an invalid email address", () => {
      cy.getByData("email").type("johndoe {enter}");
      cy.getByData("password").type("aprettylongpassword {enter}");
      cy.focused().should("have.attr", "data-testid", "email");
    });
    it("navigates to Login page on Log In click", () => {
      cy.get("a").eq(0).contains("Log In").click();
      cy.location("pathname").should("equal", "/login");
    });
    it("navigates to Forgot Password page on Forgot Password click", () => {
      cy.get("a").eq(1).contains("Forgot Password").click();
      cy.location("pathname").should("equal", "/forgot-password");
    });
  });
});
