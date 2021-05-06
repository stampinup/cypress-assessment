

 describe('Sign in Test', () => {
     
     
    it('Verify auth user and auth passwprd sign in- positive test', () => {
        cy.visit('https://www.stampinup.com/')
        cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
        cy.get('[data-testid=mobile-nav-signin]').click()
        cy.get('[data-testid=auth-email]').type('nrathi79@gmail.com')
        cy.get(".v-text-field__slot > [data-testid=auth-password]"). type('Password$21')
        cy.get("[data-testid=auth-submit] > .v-btn__content").click()
        //homepage displayed
            })
             
    it('Verify auth user and wrong password sign in- negative test', () => {
        cy.visit('https://www.stampinup.com/')
        cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
        cy.get('[data-testid=mobile-nav-signin]').click()
        cy.get('[data-testid=auth-email]').type('nrathi79@gmail.com')
        cy.get(".v-text-field__slot > [data-testid=auth-password]"). type('wrong passwrod')
        cy.get("[data-testid=auth-submit] > .v-btn__content").click()
        //The password entered is wrong message
            })
   
    it('Verify non user sign in- negative test', () => {
      cy.visit('https://www.stampinup.com/')
      cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
      cy.get('[data-testid=mobile-nav-signin]').click()
      cy.get('[data-testid=auth-email]').type('nabc@gmail.com')
      cy.get(".v-text-field__slot > [data-testid=auth-password]"). type('Password$21')
      cy.get("[data-testid=auth-submit] > .v-btn__content").click()
      //message displayed that user does not exists
          })
          it('Verify user sign in(no email)- negative test', () => {
            cy.visit('https://www.stampinup.com/')
            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
            cy.get('[data-testid=mobile-nav-signin]').click()
            cy.get('[data-testid=auth-email]').type('')
            cy.get(".v-text-field__slot > [data-testid=auth-password]"). type('Password$21')
            cy.get("[data-testid=auth-submit] > .v-btn__content").click()
            //message displayed email is req
                })


                it('Verify user sign in(no password)- negative test', () => {
                    cy.visit('https://www.stampinup.com/')
                    cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                    cy.get('[data-testid=mobile-nav-signin]').click()
                    cy.get('[data-testid=auth-email]').type('nrathi79@gmail.com')
                    cy.get(".v-text-field__slot > [data-testid=auth-password]"). type('')
                    cy.get("[data-testid=auth-submit] > .v-btn__content").click()
                    //message displayed password is req
                        })

          it('Create account test- positive', () => {
            cy.visit('https://www.stampinup.com/')
            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
            cy.get('[data-testid=mobile-nav-signin]').click()
            cy.get('[data-testid=btn-create-account] > .v-btn__content').click()
            cy.get('[data-testid=reg-first-name]').type('Neha')
            cy.get('[data-testid=reg-last-name]').type("Rathi")
            cy.get('[data-testid=reg-email]').type("nrathi79@gmail.com")
            cy.get('.v-text-field__slot > [data-testid=reg-password]').type('Password$21')
            cy.get('.v-text-field__slot > [data-testid=reg-password-confirmation]').type('Password$21')
            cy.get('[data-testid=reg-submit] > .v-btn__content').click()
                })


                it('Create account test-password mismatch- negative', () => {
                    cy.visit('https://www.stampinup.com/')
                    cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                    cy.get('[data-testid=mobile-nav-signin]').click()
                    cy.get('[data-testid=btn-create-account] > .v-btn__content').click()
                    cy.get('[data-testid=reg-first-name]').type('Neha')
                    cy.get('[data-testid=reg-last-name]').type("Rathi")
                    cy.get('[data-testid=reg-email]').type("nrathi79@gmail.com")
                    cy.get('.v-text-field__slot > [data-testid=reg-password]').type('Password$21')
                    cy.get('.v-text-field__slot > [data-testid=reg-password-confirmation]').type('Password')
                    cy.get('[data-testid=reg-submit] > .v-btn__content').click()
                
                        })
                        it('Create account test-special character miss- negative', () => {
                            cy.visit('https://www.stampinup.com/')
                            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                            cy.get('[data-testid=mobile-nav-signin]').click()
                            cy.get('[data-testid=btn-create-account] > .v-btn__content').click()
                            cy.get('[data-testid=reg-first-name]').type('Neha')
                            cy.get('[data-testid=reg-last-name]').type("Rathi")
                            cy.get('[data-testid=reg-email]').type("nrathi79@gmail.com")
                            cy.get('.v-text-field__slot > [data-testid=reg-password]').type('Pass')
                            cy.get('.v-text-field__slot > [data-testid=reg-password-confirmation]').type('Pass')
                            cy.get('[data-testid=reg-submit] > .v-btn__content').click()
                            
                                })


  })