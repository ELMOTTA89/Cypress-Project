describe('FirstTest', () => {
    it('firstTest', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.title().should('eq','OrangeHRM')
      cy.get('h5.oxd-text').should('have.text','Login') // pour verifier un texte
      cy.get('h5.oxd-text').should('have.css','color','rgb(100, 114, 140)') // pour verifier la couleur il faut : aller sur le style à droite.Copier le code de la couleur et chercher la combinason rgb color() sur Google
      cy.get('h5.oxd-text').should('have.css','text-align','center') // pour verifier si le texte est toujours centrer
      cy.get('.oxd-input').eq(0).should('have.attr','placeholder','Username')
      cy.get('.oxd-input').eq(1).should('have.attr','placeholder','Password')
      cy.get('.oxd-input').eq(0).type('Admin')
      cy.get('.oxd-input').eq(1).type('admin123')
      cy.get('.oxd-button').click()
      cy.get('h6.oxd-text').should('have.text','Dashboard')
      cy.contains('Time at Work')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(".oxd-main-menu-item[href='/web/index.php/admin/viewAdminModule']").click()
      cy.get('h5.oxd-text').should('have.text','System Users')
      cy.get('.oxd-select-text-input').eq(0).click()
      cy.xpath("//*[contains(text(),'Admin')]").eq(0).click();
      
    })
  })
 