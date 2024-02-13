import { ShoppingGallery } from ".";
import store from "@/store";

const sampleProducts = store?.products;
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
