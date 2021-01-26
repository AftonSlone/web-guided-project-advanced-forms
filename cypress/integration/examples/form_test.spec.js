describe("Form App", () => {
  beforeEach(() => {
    cy.visit("localhost:1234");
  });

  const nameInput = () => cy.get('input[name="username"]');
  const emailInput = () => cy.get('input[name="email"]');

  it("Input checks", () => {
    nameInput()
      .should("have.value", "")
      .type("Afton Slone")
      .should("have.value", "Afton Slone");
    emailInput()
      .should("have.value", "")
      .type("afton.slone@gmail.com")
      .should("have.value", "afton.slone@gmail.com");
  });
});
