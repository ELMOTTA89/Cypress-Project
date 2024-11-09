describe('FirstTest', () => {
    it('firstTest', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.title().should('eq','OrangeHRM')
    })
  })