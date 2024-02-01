import ShoppingGalleryCard from "./ShoppingGalleryCard";
import store from "@/store";

const veryifyText = (dataTestId: string, text: string) =>
  cy.getByData(`shopping-gallery-card-${dataTestId}`).should("have.text", text);

const sampleProduct = store?.products?.[0];
describe("<ShoppingGalleryCard>", () => {
  it("it renders the correct information", () => {
    cy.mount(<ShoppingGalleryCard {...sampleProduct} />);
    const { name, description, material, adjective, price, dateCreated } =
      sampleProduct;
    veryifyText("name", name);
    veryifyText("description", description);
    veryifyText("material-label", "Material");
    veryifyText("material-value", material);
    veryifyText("tags-label", "Tags");
    veryifyText("tags-value", adjective?.join(", "));
    veryifyText("price", `MYR ${price}`);
    veryifyText(
      "date",
      `Date Created: ${new Date(dateCreated).toLocaleDateString()}`,
    );
  });
});
