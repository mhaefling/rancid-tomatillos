describe('Movie Details spec', () => {
  it('should display the details of selected movie image', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/', {
      statusCode: 200,
      fixture: 'movie_posters.json'
    })
    .as('getAllMovies');

    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 200, 
      fixture: 'movie_details.json'
    })
    .as('getMovie');

    cy.visit('http://localhost:3000');

    cy.get('.MoviePoster').first().click();    
  }
)})