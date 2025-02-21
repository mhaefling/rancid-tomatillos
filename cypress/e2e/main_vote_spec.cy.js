describe('Movie Poster Voting Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/', {
      statusCode: 200,
      fixture: 'movie_posters.json'
    })
    .as('getMovies');

    cy.visit('http://localhost:3000');
    cy.wait('@getMovies');
  })

  it('should allow a user to upvote a movie', () => {
    cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: 'first_movie_vote_up.json'
    })

    cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/680', {
      statusCode: 200,
      fixture: 'last_movie_vote_up.json'
    })

    cy.get('.MoviePoster').first().find('.MoviePoster_voteCount').should('contain.text', '32544');
    cy.get('.MoviePoster_voteButton').eq(0).click()
    cy.get('.MoviePoster').first().find('.MoviePoster_voteCount').should('contain.text', '32545');

    cy.get('.MoviePoster').last().find('.MoviePoster_voteCount').should('contain.text', '27642');
    cy.get('.MoviePoster_voteButton').eq(6).click()
    cy.get('.MoviePoster').last().find('.MoviePoster_voteCount').should('contain.text', '27643');
  });

  it('should allow a user to downvote a movie', () => {
    cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: 'first_movie_vote_down.json'
    })

    cy.intercept('PATCH', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/680', {
      statusCode: 200,
      fixture: 'last_movie_vote_down.json'
    })

    cy.get('.MoviePoster').first().find('.MoviePoster_voteCount').should('contain.text', '32544');
    cy.get('.MoviePoster_voteButton').eq(1).click()
    cy.get('.MoviePoster').first().find('.MoviePoster_voteCount').should('contain.text', '32543');

    cy.get('.MoviePoster').last().find('.MoviePoster_voteCount').should('contain.text', '27642');
    cy.get('.MoviePoster_voteButton').eq(7).click()
    cy.get('.MoviePoster').last().find('.MoviePoster_voteCount').should('contain.text', '27641');
  });
});
