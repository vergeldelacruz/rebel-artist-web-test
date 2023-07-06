describe("Visit Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("passes", () => {
    cy.get("h4").invoke("text").should("equal", "Hi, Vergel 👋🏻");
  });
});
