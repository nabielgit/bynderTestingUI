/// <reference types="cypress" />

describe('Navigate to wave-trial page, attempt to login and logout', () => {
    it('Visit login page, successfully login, redirect to dashboard page and logout', () => {
      // http://wave-trial.getbynder.com/
      cy.visit('http://wave-trial.getbynder.com/', {
        timeout: 50000, // increase total time for the visit to resolve
        })
  
      // Should redirect to login URL includes '/login/'
      cy.url().should('include', '/login/')
  
      // Get Email/Username field, type username into it
      cy.get('input[id="inputEmail"]').type('qa-assignment2')
        .wait(1000) // wait 1 second
        .should('have.value', 'qa-assignment2') // Verify that the username has been filled

      // Get password input, type password into it
      cy.get('input[id="inputPassword"]').type('qa-Bynder2023!')
        .wait(1000) // wait one second
        .should('not.have.value', '') // Verify that the password has been filled

      // Get login button and click
      cy.get('button').contains('Login').click()
        .wait(3000)

      // Should login and redirect to dashboard page, URL includes '/account/dashboard'
      cy.url().should('include', '/account/dashboard')

      // Click on profile dropdown menu
      cy.get('a').contains('QA role BCT candidates2 Assignment Efrain DLS').click()

      // Get logout button and click
      cy.get('button').contains('Logout').click()
      .wait(3000)

      // Should redirect to login page URL includes '/login/'
      cy.url().should('include', '/login/')
      // Verify message "You have successfully logged out." is displayed
      cy.get('p.cbox_messagebox').should('have.text', 'You have successfully logged out.')
    })

    it('Unsuccessful login- incorrect username or password should be displayed', () => {
        // http://wave-trial.getbynder.com/
        cy.visit('http://wave-trial.getbynder.com/', {
          timeout: 50000, // increase total time for the visit to resolve
          })
    
        // Should redirect to login URL includes '/login/'
        cy.url().should('include', '/login/')
    
        // Get email/username input, type username into it
        cy.get('input[id="inputEmail"]').type('qa-assignment2qwerty')
          .wait(1000) // wait one sec
          .should('have.value', 'qa-assignment2qwerty') // Verify that the username has been filled
  
        // Get password input, type password into it
        cy.get('input[id="inputPassword"]').type('qa-Bynder50223!')
          .wait(1000) // wait one second
          .should('not.have.value', '') //  Verify that the password has been filled
  
        // Get login button and click
        cy.get('button').contains('Login').click()
          .wait(1000) // wait one sec
        // Verify message "You have entered an incorrect username or password." is displayed
        cy.get('p.cbox_messagebox').should('have.text', 'You have entered an incorrect username or password.')
      })

    it('Lost password- cancel Reset password, redirect to login', () => {
        // http://wave-trial.getbynder.com/
        cy.visit('http://wave-trial.getbynder.com/', {
          timeout: 50000, // increase total time for the visit to resolve
          })
    
        // Should redirect to login URL includes '/login/'
        cy.url().should('include', '/login/')
  
        // Get Lost Password, and click
        cy.get('div.lost-password > a').should('include.text', 'Lost password?')
          .wait(1000) // wait 1 sec
        cy.get('div.lost-password > a').contains('Lost password?').click()
          .wait(1000) // wait 1 sec

        // Redirects to user forgot password page, URL includes /user/forgotPassword/?redirectToken=
        cy.url().should('include', '/user/forgotPassword/?redirectToken=')
          .wait(1000) // wait 1 sec
        
        // Get cancel button and click
        cy.get('a.action-btn.cancel').should('include.text', 'Cancel')
          .wait(1000)
        cy.get('a.action-btn.cancel').click()
        
        // Redirects to login page, URL includes /login/?redirectToken=
        cy.url().should('include', '/login/?redirectToken=')
          .wait(1000) // wait 1 sec
      })
  })


// describe('Dashboard Nav-bar, view pages', () => {
//     it('View Assets', () => {
//       // http://wave-trial.getbynder.com/
//       cy.visit('http://wave-trial.getbynder.com/', {
//         timeout: 50000, // increase total time for the visit to resolve
//         })
  
//       // Should redirect to login URL includes '/login/'
//       cy.url().should('include', '/login/')
  
//       // Get Email/Username field, type username into it
//       cy.get('input[id="inputEmail"]').type('qa-assignment2')
//       //  Verify that the username has been updated, wait one sec after entry
//         .wait(1000)
//         .should('have.value', 'qa-assignment2')

//       // Get password input, type password into it
//       cy.get('input[id="inputPassword"]').type('qa-Bynder2023!')
//       //  Verify that the password has been updated/filled
//         .wait(1000) // wait one second
//         .should('not.have.value', '')

//       // Get login button and click
//       cy.get('button').contains('Login').click()
//         .wait(3000)

//       // Should login and redirect to dashboard page, URL includes '/account/dashboard'
//       cy.url().should('include', '/account/dashboard')
    
//       // Click on Assets navigation bar tab
//       cy.get('a').contains('Assets').click()
//       // Redirects to media page
//       cy.url().should('include', '/media/?resetsearch=true')
//     })

//     it('View Collections', () => {
//         // http://wave-trial.getbynder.com/
//         cy.visit('http://wave-trial.getbynder.com/', {
//           timeout: 50000, // increase total time for the visit to resolve
//           })
    
//         // Should redirect to login URL includes '/login/'
//         cy.url().should('include', '/login/')
    
//         // Get Email/Username field, type username into it
//         cy.get('input[id="inputEmail"]').type('qa-assignment2')
//         //  Verify that the username has been updated, wait one sec after entry
//           .wait(1000)
//           .should('have.value', 'qa-assignment2')
  
//         // Get password input, type password into it
//         cy.get('input[id="inputPassword"]').type('qa-Bynder2023!')
//         //  Verify that the password has been updated/filled
//           .wait(1000) // wait one second
//           .should('not.have.value', '')
  
//         // Get login button and click
//         cy.get('button').contains('Login').click()
//           .wait(3000)
  
//         // Should login and redirect to dashboard page, URL includes '/account/dashboard'
//         cy.url().should('include', '/account/dashboard')
      
//         // Click on Assets navigation bar tab
//         cy.get('a').contains('Collections').click()
//         // Redirects to collections page
//         cy.url().should('include', '/collections')
//     })
    
//     it('View Guides', () => {
//         // http://wave-trial.getbynder.com/
//         cy.visit('http://wave-trial.getbynder.com/', {
//           timeout: 50000, // increase total time for the visit to resolve
//           })
    
//         // Should redirect to login URL includes '/login/'
//         cy.url().should('include', '/login/')
    
//         // Get Email/Username field, type username into it
//         cy.get('input[id="inputEmail"]').type('qa-assignment2')
//         //  Verify that the username has been updated, wait one sec after entry
//           .wait(1000)
//           .should('have.value', 'qa-assignment2')
  
//         // Get password input, type password into it
//         cy.get('input[id="inputPassword"]').type('qa-Bynder2023!')
//         //  Verify that the password has been updated/filled
//           .wait(1000) // wait one second
//           .should('not.have.value', '')
  
//         // Get login button and click
//         cy.get('button').contains('Login').click()
//           .wait(3000)
  
//         // Should login and redirect to dashboard page, URL includes '/account/dashboard'
//         cy.url().should('include', '/account/dashboard')
      
//         // Click on Guides navigation bar tab
//         cy.get('a').contains('Guides').click()
//         // Redirects to guidelines page
//         cy.url().should('include', '/guidelines/')
//     })
//   })