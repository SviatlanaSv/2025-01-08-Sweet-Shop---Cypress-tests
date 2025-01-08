describe('Your Account Page Tests', () => {
  let accountPageUrl;

  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/login');
    cy.get('input[type="email"]').type('test@user.com');
    cy.get('input[type="password"]').type('123321');
    cy.contains('button', 'Login').click();
    
    cy.location('href').then((url) => {
      accountPageUrl = url;  
      cy.visit(accountPageUrl); 
    });
  });


  it('should load the page correctly', () => {
    cy.url().should('eq', accountPageUrl);
    cy.contains('h1', 'Your Account').should('be.visible');
    cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    cy.get('footer').contains('Sweet Shop Project 2018').should('be.visible'); 
  });


  it('should display the welcome message with user email', () => {
    cy.contains('Welcome back test@user.com').should('be.visible');
  });


  it('should display sections: "Previous orders", "Your basket", and "Item Order Breakdown"', () => {
    cy.contains('Previous Orders').should('be.visible');
    cy.contains('Your Basket').should('be.visible');
    cy.contains('Item Order Breakdown').should('be.visible');
  });
});