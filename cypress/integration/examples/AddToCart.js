
describe('Add to Cart', () => {
        it('Verify user is able to add product to cart', () => {
            cy.visit('https://www.stampinup.com/')
            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
            cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
            cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
            cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
            cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
            cy.get('#image-158193 > .lazy-image').click()
            cy.get('[data-testid=item-add-to-cart] > .v-btn__content').click()
                })

                it('Verify correct product quantity appears in cart', () => {
                    cy.visit('https://www.stampinup.com/')
                    cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                    cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
        
                    cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
                    cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
                    cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
                    cy.get('#image-158193 > .lazy-image').click()
                    cy.get('[data-testid=item-add-to-cart] > .v-btn__content').click()
                    cy.get('.v-toolbar__content > [data-testid=cart-qty-component] > .icon').click()
                   // cy.get('.col-5')
                    //apply equals for qty
                        })

                it('Verify user is able to delete products in cart', () => {
                    cy.visit('https://www.stampinup.com/')
                    cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                    cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
        
                    cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
                    cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
                    cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
                    cy.get('#image-158193 > .lazy-image').click()
                    cy.get('[data-testid=item-add-to-cart] > .v-btn__content').click()
                    cy.get('.v-toolbar__content > [data-testid=cart-qty-component] > .icon').click()
                    cy.get('[data-testid=testDeleteForeverButton] > .v-btn__content > .v-icon > .v-icon__svg')
                        })


                        it('Verify user is able to add product quantity in cart using +', () => {
                            cy.visit('https://www.stampinup.com/')
                            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                            cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
                
                            cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
                            cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
                            cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
                            cy.get('#image-158193 > .lazy-image').click()
                            cy.get('[data-testid=item-add-to-cart] > .v-btn__content').click()
        
                            cy.get('.v-toolbar__content > [data-testid=cart-qty-component] > .icon').click()
                            cy.get('[data-testid=incrementItemQty] > .v-btn__content > .v-icon > .v-icon__svg').click()
                            cy.wait(4000)
                        })


                                it('Verify user is able to modify  products in cart using -', () => {
                                    cy.visit('https://www.stampinup.com/')
                                    cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                                    cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
                        
                                    cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
                                    cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
                                    cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
                                    cy.get('#image-158193 > .lazy-image').click()
                                    cy.get('[data-testid=item-add-to-cart] > .v-btn__content').click()
                
                                    cy.get('.v-toolbar__content > [data-testid=cart-qty-component] > .icon').click()
                                    cy.get('[data-testid=decrementItemQty] > .v-btn__content > .v-icon > .v-icon__svg').click()
                                        })

                                        it('Verify user is able to checkout', () => {
                                            cy.visit('https://www.stampinup.com/')
                                            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                                            cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
                                
                                            cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
                                            cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
                                            cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
                                            cy.get('#image-158193 > .lazy-image').click()
                                            cy.get('[data-testid=item-add-to-cart] > .v-btn__content').click()
                                            cy.get('.v-toolbar__content > [data-testid=cart-qty-component] > .icon').click()
                                            cy.get('[data-testid=btn-order-submit]').click()
                                        })

                                        it('Verify user is able to modify the product quantity products before clicking on "add to cart" button -', () => {
                                            cy.visit('https://www.stampinup.com/')
                                            cy.get('[data-testid=nav-hamburger] > .v-btn__content > .v-icon > .v-icon__svg').click()
                                            cy.get(':nth-child(1) > .v-expansion-panel-header > .text-uppercase > .v-btn__content').click()
                                
                                            cy.get('.v-expansion-panel-content__wrap > :nth-child(1) > :nth-child(5)').click()
                                            cy.get(':nth-child(1) > .v-list-item__content > [data-testid=list-item-btn] > .v-btn__content').click()
                                            cy.get('.text-uppercase > .v-btn__content > .text-truncate').click()
                                            cy.get('#image-158193 > .lazy-image').click()
                                            cy.get('.mx-0 > :nth-child(2)').click()
                                            cy.get('[data-testid=incrementItemQty] > .v-btn__content > .v-icon > .v-icon__svg > path').click(7)

                                        })
            })