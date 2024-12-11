import 'cypress-file-upload'
describe('miniprojet', () => {
    it('miniprojet', () => {
      cy.visit('https://testautomationpractice.blogspot.com/#')
      cy.get('#name').type("Projet_1")
      cy.get('#email').type("Projet_1@gmail.com")
      cy.get('#phone').type('0700000000')
      cy.get('#name').should('have.value','Projet_1')
      cy.get('#textarea').type('this is a text ')
      cy.get("#male").check()
      cy.get("#monday").check()
      cy.get('#country').select('Canada')
      cy.get('#colors').select('Red')
      cy.get("#animals").select('Cat')
      cy.get("#datepicker").type("15/12/2024")
      cy.get('#txtDate').type("15/12/2024",{force: true})
      //cy.get("#start-date").invoke('val', '2023-12-11')
      cy.get('#start-date').type('2023-12-15');
      cy.get('#end-date').type('2023-12-19');
      cy.get('.submit-btn').click()
      cy.get('#result').should('have.text',"You selected a range of 4 days.")
      cy.get('#singleFileInput').attachFile('Cascade_-15.jpg')
      cy.get("form[id='singleFileForm'] button[type='submit']").click()
      
      cy.get("#multipleFilesInput").attachFile(['Cascade_-15.jpg','Cascade_-15 copy 2.jpg','Cascade_-15 copy 3'])
      cy.get("form[id='multipleFilesForm'] button[type='submit']").click()
      cy.get("#multipleFilesStatus").should("contain.text",'Multiple files selected')
      cy.get('table').find('tr').eq(2).find('td').eq(0)
      .should('have.text','Learn Java')
   
    })
})