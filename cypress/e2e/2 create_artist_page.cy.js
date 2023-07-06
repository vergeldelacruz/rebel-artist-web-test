describe("Create Artist", () => {
  beforeEach(() => {
    cy.visit("/createArtist");
    cy.get("#name").as("nameInput");
    cy.get("#rate").as("rateInput");
    cy.get("#streamCount").as("streamCountInput");
    cy.get("#active").as("active");
    cy.get("#saveButton").as("saveButton");
  });

  it("prevents user from typing more characters than the max", () => {
    cy.get("@nameInput").type(
      "cam2FktxdFkpF7ZnbMdBHnrperLI66oy4SVjBxstx7Y4TiTztdIrTeFOv5m6W2dHTtrMXciRAs0R8osNAhJrNUcdgYeNC3qb0YHJUK9WNh2nfUjOP8FtoKmtFrB8HgCYKKb01UqVAHuGbjqXODpog6tnc3mNbLqAH7GBBa5D1nABPZG7ebwHW0DMpv7Hel38z8yXnuiPPyTxm224AoQVdCTwuJPoCBra6Awx7l54oIxD6Vf13gIehCgwRJYaiwH3p7B3l4lVXYWKCtW336LO5AdQVnWldMK3ITIv2d42uR1wM38woaCDQbyrU2kcK1e46Gjf7f6i9yvRVJ4DTqcvA0ykVWdI3w8W50NvceguMQZq0WP8qFo3cvf0bVjz9SswDTiZf3BomlMPvzUM TOOLONG"
    );

    cy.get("@nameInput").should(
      "have.attr",
      "value",
      "cam2FktxdFkpF7ZnbMdBHnrperLI66oy4SVjBxstx7Y4TiTztdIrTeFOv5m6W2dHTtrMXciRAs0R8osNAhJrNUcdgYeNC3qb0YHJUK9WNh2nfUjOP8FtoKmtFrB8HgCYKKb01UqVAHuGbjqXODpog6tnc3mNbLqAH7GBBa5D1nABPZG7ebwHW0DMpv7Hel38z8yXnuiPPyTxm224AoQVdCTwuJPoCBra6Awx7l54oIxD6Vf13gIehCgwRJYaiwH3p7B3l4lVXYWKCtW336LO5AdQVnWldMK3ITIv2d42uR1wM38woaCDQbyrU2kcK1e46Gjf7f6i9yvRVJ4DTqcvA0ykVWdI3w8W50NvceguMQZq0WP8qFo3cvf0bVjz9SswDTiZf3BomlMPvzUM"
    );
  });

  it("prevents user from typing non numbers", () => {
    cy.get("@rateInput")
      .type("abc")
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should be a number").to.eq(false); // passes
      });

    cy.get("@streamCountInput")
      .type("abc")
      .invoke("val")
      .should((value) => {
        expect(Number.isNaN(+value), "input should be a number").to.eq(false); // passes
      });
  });

  it("allow user to add new artist", () => {
    cy.get("@nameInput").type("Vergel");
    cy.get("@rateInput").type(0.2);
    cy.get("@streamCountInput").type(2500);
    cy.get("@active").check();
    cy.get("@saveButton").click();
    cy.get('div.MuiSnackbarContent-message').should(
          "have.text",
          "Artist created successfully"
        );
  });  

});
