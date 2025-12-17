describe('Testes de Login - SauceDemo', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  
  it('Deve fazer login com sucesso', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })
  
it('Deve exibir mensagem de erro ao inserir senha invalida', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senha123')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})

it('deve exibir erro com usuário incorreto', () => {
    cy.get('#user-name').type('standard')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
})

    it('Deve exibir erro ao deixar campo vazio', () => {
      cy.get('#login-button').click()
      cy.get('[data-test="error"]').should('contain', 'Username is required')


})

})



