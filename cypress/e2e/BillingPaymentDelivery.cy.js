describe('Basket Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/basket');
  });


describe('"Billing Address" Section', () => {
  it('should verify the presence and visibility of all fields', () => {
    cy.get('.col-md-6.mb-3').first().find('input.form-control').should('exist').and('be.visible');
    cy.get('.col-md-6.mb-3').eq(1).find('input.form-control').should('exist').and('be.visible');
    cy.get('input[type="email"]').should('exist').and('be.visible');
    cy.get('input#address').should('exist').and('be.visible');
    cy.get('input#zip').should('exist').and('be.visible');
    cy.get('select#country').should('exist').and('be.visible');
    cy.get('select#city').should('exist').and('be.visible');
  });
});


  it('should allow the fields to be filled in', () => {
    cy.get('.col-md-6.mb-3').first().find('input.form-control').type('Test');
    cy.get('.col-md-6.mb-3').eq(1).find('input.form-control').type('User');
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('input#address').type('123 Test St, Test City');
    cy.get('input#zip').type('CL1 2SW');
    cy.get('select#country').select('United Kingdom');
    cy.get('select#city').select('Cardiff');
  });


  describe('"Payment" Section', () => {
    it('should verify the presence and visibility of all fields', () => {
      cy.get('input#cc-name').should('exist').and('be.visible');
      cy.get('input#cc-number').should('exist').and('be.visible');
      cy.get('input#cc-expiration').should('exist').and('be.visible');
      cy.get('input#cc-cvv').should('exist').and('be.visible');
    });
  });


    it('should allow the fields to be filled in', () => {
      cy.get('input#cc-name').type('Mastercard');
      cy.get('input#cc-number').type('1234 1234 1234 1234');
      cy.get('input#cc-expiration').type('05/26');
      cy.get('input#cc-cvv').type('123');
    });
 

it('the "Continue to checkout" button should be visible and clickable', () => {
  cy.contains('button', 'Continue to checkout')
    .should('exist').and('be.visible').click();
});


describe('"Delivery" Section', () => {
  it('should have "Collect (FREE)" selected by default', () => {
    cy.contains('.custom-control', 'Collect (FREE)') 
      .find('input[type="radio"]')
      .should('be.checked'); 
  });
});


describe('Successful Checkout Process', () => {
  it('should proceed to checkout with all fields filled in', () => {
   
    cy.get('.col-md-6.mb-3').first().find('input.form-control').type('Test');
    cy.get('.col-md-6.mb-3').eq(1).find('input.form-control').type('User');
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('input#address').type('123 Test St, Test City');
    cy.get('input#zip').type('CL1 2SW');
    cy.get('select#country').select('United Kingdom');
    cy.get('select#city').select('Cardiff');

    cy.get('input#cc-name').type('Mastercard');
    cy.get('input#cc-number').type('1234 1234 1234 1234');
    cy.get('input#cc-expiration').type('05/26');
    cy.get('input#cc-cvv').type('123');

    cy.contains('button', 'Continue to checkout').click();
    cy.get('.error-message').should('not.exist');
  });
});


describe('Failed Checkout Process - Missing Shipping Address', () => {
  it('should show an error when shipping address is not filled in', () => {
  
    cy.get('.col-md-6.mb-3').first().find('input.form-control').type('Test');
    cy.get('.col-md-6.mb-3').eq(1).find('input.form-control').type('User');
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('input#zip').type('CL1 2SW');
    cy.get('select#country').select('United Kingdom');
    cy.get('select#city').select('Cardiff');

    cy.get('input#cc-name').type('Mastercard');
    cy.get('input#cc-number').type('1234 1234 1234 1234');
    cy.get('input#cc-expiration').type('05/26');
    cy.get('input#cc-cvv').type('123');

    cy.contains('button', 'Continue to checkout').click();
    cy.get('.invalid-feedback').should('contain', 'Please enter your shipping address');
  });
});


describe('Failed Checkout Process - Missing Credit Card Number', () => {
  it('should show an error when credit card number is not filled in', () => {
   
    cy.get('.col-md-6.mb-3').first().find('input.form-control').type('Test');
    cy.get('.col-md-6.mb-3').eq(1).find('input.form-control').type('User');
    cy.get('input[type="email"]').type('test@test.com');
    cy.get('input#address').type('123 Test St, Test City');
    cy.get('input#zip').type('CL1 2SW');
    cy.get('select#country').select('United Kingdom');
    cy.get('select#city').select('Cardiff');

    cy.get('input#cc-name').type('Mastercard');
    cy.get('input#cc-expiration').type('05/26');
    cy.get('input#cc-cvv').type('123');

    cy.contains('button', 'Continue to checkout').click();
    cy.get('.invalid-feedback').should('contain', 'Credit card number is required');
  });
});

});


