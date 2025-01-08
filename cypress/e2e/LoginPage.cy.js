describe('Login Page Tests', () => {


  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/login');
  });

  it('should load the page correctly', () => {
    cy.url().should('eq', 'https://sweetshop.netlify.app/login');
    cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    cy.get('footer').should('contain', 'Sweet Shop Project 2018');
  });


  it('should display the page header "Login"', () => {
    cy.contains('h1', 'Login').should('be.visible');
  });
  

  it('should display a login form with email and password fields', () => {
    cy.get('form').within(() => {
      cy.get('#exampleInputEmail').should('exist');
      cy.get('#exampleInputPassword').should('exist');
    });
  });


  it('should display Twitter, Facebook, and LinkedIn images', () => {
    cy.get('img[alt="twitter"]').should('be.visible');
    cy.get('img[alt="facebook"]').should('be.visible');
    cy.get('img[alt="linkedin"]').should('be.visible');
  });


  it('should not allow login with invalid email and password', () => {
    cy.get('input[type="email"]').type('testuser.com');
    cy.get('input[type="password"]').type('123456');
    cy.contains('button', 'Login').click();
    cy.contains('Please enter a valid email address.').should('be.visible');
  });


  it('should allow login with valid email and password and redirect to account page', () => {
    cy.get('input[type="email"]').type('test@user.com');
    cy.get('input[type="password"]').type('123321');
    cy.contains('button', 'Login').click();
    cy.contains('h1', 'Your Account').should('be.visible');
  });
});



