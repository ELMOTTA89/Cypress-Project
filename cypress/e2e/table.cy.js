import 'cypress-file-upload'
describe('table', () => {
    it('table', () => {
      cy.visit('https://practice-automation.com/tables/')
      cy.get("tbody tr td:nth-child(1) strong:nth-child(1)").should('have.text','Item')
      cy.get("tbody tr td:nth-child(2) strong:nth-child(1)").should('have.text','Price')
      cy.get('table').find('tr').eq(0).find('td').eq(0)
      .should('have.text','Item')
      .then((content) => {cy.log(content.text())
      cy.get('table').find('tr').eq(0).find('td').eq(1)
      .should('have.text','Price')
      .then((content) => {
        cy.log(content.text())
      })

      })
   
    })
})