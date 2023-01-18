describe('Positif Login Test', () => {

    it('Visits the Internet Herokuapp', () => {

      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('.fa').click()
      cy.get('.button').click()

    })

  })

describe('Negatif Login Test', () => {

    it('Visits the Internet Herokuapp', () => {

      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type('tomsmithhhhh')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('.fa').click()
      

    })

  })