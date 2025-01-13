describe('Sweet Shop Main Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/');
  });


  it('should load the page correctly and display the title "Sweet Shop"', () => {
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
    cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    cy.get('footer').should('contain', 'Sweet Shop Project 2018');
  });


  it('should have the correct page header "Welcome to the sweet shop!"', () => {
    cy.contains('h1', 'Welcome to the sweet shop!').should('be.visible');
  });


  it('should have a navigation menu with the correct links', () => {
    cy.get('nav').within(() => {
      cy.get('a[href="/sweets"]').should('contain', 'Sweets');
      cy.get('a[href="/about"]').should('contain', 'About');
      cy.get('a[href="/login"]').should('contain', 'Login');
      cy.get('a[href="/basket"]').should('contain', 'Basket');
    });
  });


  it('should display the "Our most popular choice of retro sweets." section', () => {
    cy.get('.lead').should('contain', 'Our most popular choice of retro sweets.');
  });


  it('should display each product with an image, name, and price', () => { 
    cy.get('.card').each(($card) => {
      cy.get($card).find('.card-img-top').should('be.visible'); 
      cy.get($card).find('.card-title').should('not.be.empty'); 
      cy.get($card).find('.card-text').should('not.be.empty'); 
      cy.get($card).find('.text-muted').should('not.be.empty'); 
    });
  });


  it('should add an item to the basket when "Add to Basket" is clicked and the basket icon should be updated', () => {
    cy.get('.card').first().within(() => {
      cy.contains('Add to Basket').click(); 
    });
  
    cy.get('.badge.badge-success').should('contain', '1');
  });
  

  it('should navigate to the Sweets page when "Browse Sweets" is clicked', () => {
    cy.contains('Browse Sweets').click();
    cy.url().should('include', '/sweets');
  });
});



