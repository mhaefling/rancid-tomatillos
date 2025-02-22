describe('404 spec', () => {
  it('Should display 404 not found page, when attempting to visit invalid url', () => {
    cy.visit('http://localhost:3000/nonsense')
    cy.get('.NotFound-section').should('exist')
    cy.get('.NotFound-header').should('contain.text', '404 - Page Not Found')
    cy.get('p').should('contain.text', "The page you're looking for doesn't exist.")
  });
});