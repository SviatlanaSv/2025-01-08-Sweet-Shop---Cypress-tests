describe('Sweets Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/sweets');
  });


  it('should load the page correctly and display the title "Sweet Shop"', () => {
    cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
    cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    cy.get('footer').should('contain', 'Sweet Shop Project 2018');
  });


  it('should display the page header "Browse Sweets"', () => {
    cy.contains('h1', 'Browse sweets').should('be.visible'); 
  });


  it('should display each product with an image, name, and price', () => {
    cy.get('.card').each(($card) => {
      cy.get($card).find('.card-img-top').should('be.visible'); 
      cy.get($card).find('.card-title').should('not.be.empty'); 
      cy.get($card).find('.card-text').should('not.be.empty'); 
    });
  });

  
  it('should add an item to the basket when "Add to Basket" is clicked', () => {
    cy.get('.card').first().within(() => {
      cy.contains('Add to Basket').click(); 
    });

    cy.get('.badge.badge-success') 
      .should('have.text', '1'); 
  });
});
