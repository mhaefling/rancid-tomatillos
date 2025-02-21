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
    cy.url().should('include', '/movie/155')

    cy.get('h1').should('contain', 'rancid tomatillos')
    cy.get('header').find('img').should('have.attr', 'alt', 'Home icon')

    cy.get('.MovieDetails').find('.MovieDetails_image').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg")
    cy.get('.MovieDetails_attributes').find('.MovieDetails_title').should('contain', "The Dark Knight")
    cy.get('.MovieDetails_genreList').find('.MovieDetails_genre').should('contain', "Drama", "Action", "Crime", "Thriller")
    cy.get('.MovieDetails_attributes').find('.MovieDetails_overview').should('contain', "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.")
  })
})