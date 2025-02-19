describe('Movie Poster spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays the application title', () => {
    cy.get('h1').should('contain', 'rancid tomatillos')
  })

  it('displays the movie posters', () => {
    cy.get('.MoviesContainer').should('exist')
    cy.get('.MoviePoster').should('exist')

    cy.get('.MoviePoster').first().find('.MoviePoster_thumbnail').should('exist')
    cy.get('.MoviePoster').first().find('.MoviePoster_voteCount').should('exist')

    cy.get('.MoviePoster').last().find('.MoviePoster_thumbnail').should('exist')
    cy.get('.MoviePoster').last().find('.MoviePoster_voteCount').should('exist')
  })
})