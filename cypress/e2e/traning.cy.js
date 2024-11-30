import 'cypress-file-upload'
describe('checknewtab', () => {
    it('checknewtab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").then((e)=>{

            let url=e.prop('href')
        
            cy.visit(url)
            cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        })
   
    })
  })
 
