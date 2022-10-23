describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');

    // buttons
    const minusButton = () => cy.findByText(/-1/i);
    const plusButton = () => cy.findByText(/\+1/i);

    // get counter
    const getCounter = () => cy.findByTestId('counter');

    // starting render
    minusButton().should('exist');
    plusButton().should('exist');
    getCounter().should('exist');
    getCounter().should('have.text', '0');


    // counter is working
    minusButton().click();
    getCounter().should('have.text', '-1');
    plusButton().click();
    getCounter().should('have.text', '0');
    plusButton().click();
    getCounter().should('have.text', '1');
  });
});
