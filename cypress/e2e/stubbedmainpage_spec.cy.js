describe('Movie Poster spec', () => {
  it('should display the title and movie posters on initial load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/', {
      statusCode: 200,
      fixture: 'movie_posters.json'
    })
    .as('getMovies');
    
    cy.visit('http://localhost:3000');
    
    cy.wait('@getMovies');

    cy.get('h1', { timeout: 10000 }).should('exist');
    cy.get('.MoviesContainer').should('exist');
    cy.get('.MoviePoster').should('have.length', 4); // Ensure the correct number of posters are displayed
    cy.get('.MoviePoster').first().find('.MoviePoster_thumbnail').should('exist');
    cy.get('.MoviePoster').first().find('.MoviePoster_voteCount').should('exist');
    cy.get('.MoviePoster').last().find('.MoviePoster_thumbnail').should('exist');
    cy.get('.MoviePoster').last().find('.MoviePoster_voteCount').should('exist');
  });
});
