import { ShoppingGallery } from ".";
import { demo } from "../../data";

const sampleProducts = demo?.products;
describe("<ShoppingGallery>", () => {
  beforeEach(() => {
    cy.mount(<ShoppingGallery products={sampleProducts} />);
  });
  it("it renders the correct number of children", () => {
    cy.getByData("shopping-gallery")
      .children()
      .should("have.length", sampleProducts.length);
  });
});
