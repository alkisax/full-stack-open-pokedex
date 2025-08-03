describe('Pokedex', function() {
  const baseUrl = Cypress.env('APP_ENV') === 'ci'
    ? 'http://localhost:5000'
    : 'http://localhost:8080'

  it('front page can be opened', function() {
    cy.visit(baseUrl)
    cy.contains('bulbasaur')
  })

  it('front page can be opened', function() {
    cy.visit(baseUrl)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })  
})