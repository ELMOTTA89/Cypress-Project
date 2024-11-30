import '@4tw/cypress-drag-drop';
//require ('@4tw/cypress-drag-drop')
describe('mouseoperation', () => {
    it.skip('mousehover', () => {
      cy.visit('https://demo.opencart.com/')
      cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1)')
      .should('not.be.visible')
      cy.get('.nav-link.dropdown-toggle[href="https://demo.opencart.com/en-gb/catalog/desktops"]').trigger('mouseover').click()
      cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1)')
      .should('be.visible')  
    })
    it.skip('clickright', () => {
      cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
      //première approche
      //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
      //Deuxième approche
      cy.get('.context-menu-one.btn.btn-neutral').rightclick()
      cy.get('.context-menu-list.context-menu-root').should('be.visible')
    })
    it.skip('double', () => {
      cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
      cy.get('.context-menu-one.btn.btn-neutral').dblclick()
    })

    it.skip('dragandrop', () => {
      cy.visit('https://testautomationpractice.blogspot.com/#')
      cy.get('#draggable').should('be.visible')
      cy.get('#droppable').should('be.visible')
      cy.get('#draggable').drag('#droppable')

    })
    it.skip('dragandropcities', () => {
      cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
      cy.get('#box1').should('be.visible')
      cy.get('#box101').should('be.visible')
      cy.get('#box1').drag('#box101')
    })
    it('scrollutilview', () => {
      cy.visit('https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/')
      cy.get('tbody tr:nth-child(7)').scrollIntoView()
      cy.get('tbody tr:nth-child(14) td:nth-child(3)').scrollIntoView()
      cy.scrollTo('bottom')

  })



})