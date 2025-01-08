describe('About Page Tests', () => {
 
    beforeEach(() => {
      cy.visit('https://sweetshop.netlify.app/about');
    });


  it('should load the page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/about'); 
    cy.url().should('eq', 'https://sweetshop.netlify.app/about'); 
    cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    cy.get('footer').contains('Sweet Shop Project 2018').should('be.visible'); 
  });


  it('should display the page header "Sweet Shop Project"', () => {
    cy.contains('Sweet Shop Project').should('be.visible'); 
  });

  
  it('should display the lead text', () => {
    cy.get('p.lead').should('be.visible').and('not.be.empty'); 
  });
});
