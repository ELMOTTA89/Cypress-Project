describe('list google', () => {
    it.skip('list dynamique google', () => {
      cy.visit('https://www.google.fr/')
      cy.get('.QS5gu.sy4vM').eq(0).click()
      cy.get('.gLFyf').type("cypress automation")
      //pour compter le nombre des élements , il faut séléctionner la classe commune 
      cy.get('.wM6W7d').should('have.length',13)
      //cy.contains('cypress automation tutorial').click() //ça passe :)
      //cy.get('.wM6W7d').eq(2).click() // cypress automation tutorial ... ça passe :)

      //Iteration sur une liste
      cy.get('.wM6W7d').each((element) => {
        if (element.text()== 'cypress automation tutorial'){
            cy.wrap(element).click()
        } 
      })
      cy.get('textarea.gLFyf').should('have.text','cypress automation tutorial')
    })

    it('list wikipedia', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        
        cy.get('.suggestion-link').should('have.length',6)
        //cy.contains('Delhi Capitals').click()
        cy.get('.suggestion-title').each((element) => {
            if (element.text()== 'Delhi Capitals'){
                cy.wrap(element).click()
            } 
          })
          cy.get('.mw-page-title-main').should('have.text','Delhi Capitals')
      })
  })
