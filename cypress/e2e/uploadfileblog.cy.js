import 'cypress-file-upload'
describe('uploadfile', () => {
    it.skip('uploadfile', () => {
      cy.visit('https://testautomationpractice.blogspot.com/')
      cy.get('#singleFileInput').attachFile('Cascade_-15.jpg')
   
    })

    it('downloadfile', () => {
      cy.visit('https://practice-automation.com/file-download/')
      cy.get(".wpdm-download-link.download-on-click.btn.btn-primary").click()
      cy.readFile("cypress/downloads/test.pdf").should('exist')
      cy.readFile("cypress/downloads/test.pdf",'binary').then((content) => {
        expect(content.length).to.be.greaterThan(0)
      } ) 
   
    })
  })
 
