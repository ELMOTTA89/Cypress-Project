import 'cypress-file-upload'
describe('template spec', () => {
    it('paravenduAnnonce', () => {
      cy.visit('https://www.paruvendu.fr/')
      cy.url().should('eq','https://www.paruvendu.fr/')
      cy.get('[onclick="cmp_pv.cookie.saveConsent(true);"]').click()
      cy.contains('Les petites annonces')
      cy.get("a.text-base[title='Déposez vos annonces gratuites']").click()
      cy.contains("Déposez une annonce gratuite")
      cy.get("div.select[data-type='1']").click()
      cy.wait(1000)
      //cy.get(".dropdown [data-value='V']").click()
      cy.get("li[data-value='V']").click()
      cy.get("li[data-value='VVO00000']").click()
      cy.get('.depresp17-btn .material-icons').scrollIntoView();
      cy.get("label[id='imgUpload-drop'] input[title='Cliquer pour ajouter des images']").attachFile('Cascade_-15.jpg')
      //cy.get('.depresp17-btn .material-icons').click()  
         
    })
  })