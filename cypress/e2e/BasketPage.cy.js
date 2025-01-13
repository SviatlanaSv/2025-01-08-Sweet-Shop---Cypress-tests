describe('Basket Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/basket');
  });


  describe('"Your Basket" Section', () => {
    it('should load the page correctly', () => {
      cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
      cy.contains('h1', 'Your Basket').should('be.visible');
    });

   
    it('should retain items added to the basket while navigating the page', () => {
      cy.visit('https://sweetshop.netlify.app/sweets');
      cy.get('.card').first().within(() => {
        cy.contains('Add to Basket').click();
      });
      cy.visit('https://sweetshop.netlify.app/');
      cy.visit('https://sweetshop.netlify.app/login');
      cy.visit('https://sweetshop.netlify.app/basket');
      cy.get('#basketCount').should('have.text','1');
    });


    it('should display 3 items in the basket with correct details', () => {
      for (let i = 0; i < 3; i++) {
        cy.visit('https://sweetshop.netlify.app/sweets');
        cy.get('.card').eq(i).within(() => {
          cy.contains('Add to Basket').click();
        });
      }
      cy.visit('https://sweetshop.netlify.app/basket');
      cy.get('#basketCount').should('have.text', '3');
      cy.get('.list-group-item').each(($item) => {
        cy.get($item).find('.my-0').should('not.be.empty');
        cy.get($item).find('.text-muted').should('not.be.empty');
       
      });
    });
    

    it('should calculate and display the correct total price in the "Total (GBP)" section', () => {
      let total = 0;
    
      for (let i = 0; i < 2; i++) {
        cy.visit('https://sweetshop.netlify.app/sweets');
        cy.get('.card').eq(i).within(() => {
          cy.get('.text-muted').invoke('text').then((price) => {
            total += parseFloat(price.replace('£', ''));
          });
          cy.contains('Add to Basket').click();
        });
      }
    
      cy.visit('https://sweetshop.netlify.app/basket');
      cy.get('.list-group-item.d-flex.justify-content-between strong')
        .invoke('text')
        .then((displayedTotal) => {
          const displayedValue = parseFloat(displayedTotal.replace('£', ''));
          expect(displayedValue).to.equal(total); 
        });
    });
    
    
    it('should remove an item from the basket when "Delete item" is clicked', () => {
      cy.visit('https://sweetshop.netlify.app/sweets');
      cy.get('.card').first().within(() => {
        cy.contains('Add to Basket').click();
      });
    
      cy.visit('https://sweetshop.netlify.app/basket');
      cy.get('.list-group-item').should('exist'); 
    
      cy.on('window:confirm', (text) => {
        expect(text).to.contain('Are you sure you want to remove this item?');
        return true; 
      });
    
      cy.contains('Delete Item').click();
    
      cy.get('.list-group-item').find('.my-0').should('not.exist');
      cy.get('.list-group-item').find('.text-muted').should('not.exist');
      cy.get('#basketCount').should('have.text', '0');
    });
    });


    it('should remove all items when "Empty Basket" is clicked', () => {
      for (let i = 0; i < 2; i++) {
        cy.visit('https://sweetshop.netlify.app/sweets');
        cy.get('.card').eq(i).within(() => {
          cy.contains('Add to Basket').click();
         

        });
      }
      cy.visit('https://sweetshop.netlify.app/basket');
      cy.get('.list-group-item').should('exist'); 
      cy.get('#basketCount').should('have.text', '2');

      cy.on('window:confirm', (text) => {
        expect(text).to.contain('Are you sure you want to empty your basket?');
        return true; 
      });
      cy.contains('Empty Basket').click();
      cy.get('.list-group-item').find('.my-0').should('not.exist');
      cy.get('.list-group-item').find('.text-muted').should('not.exist');
      cy.get('#basketCount').should('have.text', '0');
    });
  });



 



  




