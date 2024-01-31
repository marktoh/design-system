describe("Home Page", () => {
  it("Visits the homepage", () => {
    cy.visit("http://localhost:3000");
    cy.getByData("heading").contains("HomePage");
    cy.get("li").eq(0).contains("Login");
    cy.get("li").eq(1).contains("Sign Up");
    cy.get("li").eq(2).contains("Forgot Password");
  });
});
