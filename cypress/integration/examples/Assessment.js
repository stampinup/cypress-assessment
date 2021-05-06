///<refrence types="cypress">

describe('Homepage Test', () => {
    it('Verify The Title of the webpage- positive', () => {
     cy.visit('https://www.stampinup.com/')
     cy.title().should('eq',"Stampin' Up! - Homepage - May 2021")
    })
  
  
    describe('Sign in Test', () => {
     
   
      it('Verify Create account- positive', () => {
        cy.visit('https://www.stampinup.com/')
        cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
        cy.get('[data-testid=mobile-nav-signin]').click()
        cy.get('[data-testid=auth-email]').type('nrathi79@gmail.com')
        cy.get(".v-text-field__slot > [data-testid=auth-password]"). type('Password')
        cy.get("[data-testid=auth-submit] > .v-btn__content").click()
            })
    })
   
   })