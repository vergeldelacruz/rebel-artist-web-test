describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/artists");
  });

  it("user search for single artist", () => {
    cy.get("#searchInput").type("Vergel 2");
    cy.get("div.MuiDataGrid-row").its('length').should("eq", 1);
  });
  it("user clicks clear button", () => {
    cy.get("#clearButton").click();
    cy.get("div.MuiDataGrid-row").its('length').should("be.gte", 1);
  });
  it("user clicks refresh button", () => {
    cy.get("#clearButton").click();
    cy.get("div.MuiDataGrid-row").its('length').should("be.gte", 1);
  });
});
