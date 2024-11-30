import 'cypress-file-upload'
describe('uploadfile', () => {
    it('uploadfile', () => {
      cy.visit('https://testautomationpractice.blogspot.com/')
      cy.get('#singleFileInput').attachFile('Cascade_-15.jpg')
   
    })

    it('downloadfile', () => {
      cy.visit('https://demo.automationtesting.in/FileDownload.html')
   
    })
  })
 
