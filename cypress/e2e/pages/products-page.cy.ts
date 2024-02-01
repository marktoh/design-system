describe("Products Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products");
  });
  it("Correctly shows products with filter input", () => {
    cy.getByData("shopping-gallery").children().should("have.length", 100);
    cy.getByData("search-results-count").should(
      "have.text",
      "100 products found.",
    );
    cy.getByData("shopping-gallery-search-bar").type("Ball");
    cy.getByData("shopping-gallery").children().should("have.length", 7);
    cy.getByData("search-results-count").should(
      "have.text",
      "7 products found.",
    );
  });
});
