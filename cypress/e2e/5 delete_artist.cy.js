//alert(Cypress.env('MY_ENV_VARIABLE'))
describe("Delete Artist", () => {
  beforeEach(() => {
    cy.visit("/artists");
    cy.get("#searchInput").as("searchInput");
  });

  it("passes", () => {
    cy.get("@searchInput").type("Vergel 2");

    cy.get("p.MuiTablePagination-displayedRows").should(
      "have.text",
      "1–1 of 1"
    );
    cy.get("div.MuiDataGrid-row #deleteButton").click();
    cy.get("#confirmDialog #yesButton").click();
    cy.get("div.MuiSnackbarContent-message").should(
      "have.text",
      "Artist deleted successfully"
    );
  });
});
