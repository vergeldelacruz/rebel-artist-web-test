describe("Edit Artist", () => {
  beforeEach(() => {
    cy.visit("/artists");
    cy.get("#searchInput").type("Vergel");
    cy.get("p.MuiTablePagination-displayedRows").should(
      "have.text",
      "1–1 of 1"
    );
    cy.get("div.MuiDataGrid-row #editButton").click();
  });

  it("prevents user from typing more characters than the max", () => {
    cy.get("#name").clear(); 

    cy.get("#name").type(
      "cam2FktxdFkpF7ZnbMdBHnrperLI66oy4SVjBxstx7Y4TiTztdIrTeFOv5m6W2dHTtrMXciRAs0R8osNAhJrNUcdgYeNC3qb0YHJUK9WNh2nfUjOP8FtoKmtFrB8HgCYKKb01UqVAHuGbjqXODpog6tnc3mNbLqAH7GBBa5D1nABPZG7ebwHW0DMpv7Hel38z8yXnuiPPyTxm224AoQVdCTwuJPoCBra6Awx7l54oIxD6Vf13gIehCgwRJYaiwH3p7B3l4lVXYWKCtW336LO5AdQVnWldMK3ITIv2d42uR1wM38woaCDQbyrU2kcK1e46Gjf7f6i9yvRVJ4DTqcvA0ykVWdI3w8W50NvceguMQZq0WP8qFo3cvf0bVjz9SswDTiZf3BomlMPvzUM TOOLONG"
    );

    cy.get("#name").should(
      "have.attr",
      "value",
      "cam2FktxdFkpF7ZnbMdBHnrperLI66oy4SVjBxstx7Y4TiTztdIrTeFOv5m6W2dHTtrMXciRAs0R8osNAhJrNUcdgYeNC3qb0YHJUK9WNh2nfUjOP8FtoKmtFrB8HgCYKKb01UqVAHuGbjqXODpog6tnc3mNbLqAH7GBBa5D1nABPZG7ebwHW0DMpv7Hel38z8yXnuiPPyTxm224AoQVdCTwuJPoCBra6Awx7l54oIxD6Vf13gIehCgwRJYaiwH3p7B3l4lVXYWKCtW336LO5AdQVnWldMK3ITIv2d42uR1wM38woaCDQbyrU2kcK1e46Gjf7f6i9yvRVJ4DTqcvA0ykVWdI3w8W50NvceguMQZq0WP8qFo3cvf0bVjz9SswDTiZf3BomlMPvzUM"
    );
  });

  it("prevents user from typing non numbers", () => {
    cy.get("#rate").clear(); 
    cy.get("#streamCount").clear(); 
    cy.get("#rate")
      .type("abc")
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should be a number").to.eq(false); // passes
      });

    cy.get("#streamCount")
      .type("abc")
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should be a number").to.eq(false); // passes
      });
  });

  it("allow user to update artist", () => {

    cy.get("#name").clear(); 
    cy.get("#rate").clear(); 
    cy.get("#streamCount").clear(); 

    cy.get("#name").type("Vergel 2");
    cy.get("#rate").type(0.21);
    cy.get("#streamCount").type(2501);
    cy.get("#active").uncheck();
    cy.get("#saveButton").click();
    cy.get("div.MuiSnackbarContent-message").should(
      "have.text",
      "Artist updated successfully"
    );
  });
});
