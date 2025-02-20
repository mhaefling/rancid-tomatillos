describe('Movie Poster spec', () => {
  it('should display the title and movie posters on initial load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/', {
      statusCode: 200,
      fixture: 'movie_posters.json'
    })
    .as('getMovies');
    
    cy.visit('http://localhost:3000');
    
    cy.wait('@getMovies');

    cy.get('h1').should('contain', 'rancid tomatillos')
    
    cy.get('.MoviePoster').should('have.length', 4);

    cy.get('.MoviePoster_voteIcon').first().should('have.attr', 'alt', 'Upvote');
    cy.get('.MoviePoster_voteIcon').last().should('have.attr', 'alt', 'Downvote');


    cy.get('.MoviePoster').first()
      .find('.MoviePoster_thumbnail')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg'); 
    cy.get('.MoviePoster').first()
      .find('.MoviePoster_voteCount')
      .should('contain.text', '32544'); 

    cy.get('.MoviePoster').last()
      .find('.MoviePoster_thumbnail')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg');
    cy.get('.MoviePoster').last()
      .find('.MoviePoster_voteCount')
      .should('contain.text', '27642'); 
     });
});
