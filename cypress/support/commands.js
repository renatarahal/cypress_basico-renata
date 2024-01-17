Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Renata')
    cy.get('#lastName').type('Rahal')
    cy.get('#email').type('email@email.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})