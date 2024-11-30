import 'cypress-file-upload'
describe('FirstTest', () => {
    it('firstTest', () => {
      cy.visit('https://the-internet.herokuapp.com/upload')
      cy.get('#file-upload').attachFile('Cascade_-15.jpg')
      cy.get('#file-submit').click()  
      
    })
  })
