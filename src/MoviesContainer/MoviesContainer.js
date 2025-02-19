import './MoviesContainer.css';
import { useState, useEffect } from 'react';
import MoviePoster from '../MoviePoster/MoviePoster'
import MovieDetails from '../MovieDetails/MovieDetails';

function Movies({setHome, home}) {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([{}])


  function getMoviePosters() {
    fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/')
    .then(response => response.json())
    .then(movies => setMovies(movies))
    .catch(error => console.log(error.message))
  } 

  useEffect(() => {
    getMoviePosters()    
  }, [])

  function submitVote(id, voteType) {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ vote_direction: `${voteType}` }),
    })
    .then(response => response.json())
    .then(data => {
      const updatedMovies = movies.map((movie) => {
        if (movie.id === id) {
          return data
        } else {
          return movie
        }
      })
      setMovies(updatedMovies)
    })
    .catch(error => console.log('Unsuccessful Vote: ', error.message))
  };

function showMovieDetails(id) {
  setMovie([])

  fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(movieInfo => setMovie(movieInfo))
    .catch(error => console.log(error.message))

  setHome([movie])
  };

  const allPosters = movies.map(poster => {
    return (
      <MoviePoster 
        posterImage={poster.poster_path} 
        voteCount={poster.vote_count} 
        id={poster.id} 
        submitVote={submitVote} 
        showMovieDetails={showMovieDetails}
        key={poster.id}/>
    )
  });

  if (home.length > 0) {
    return (
      <section className='MoviesContainer'>
        <MovieDetails movieDetails={movie} />
      </section>
    )
  } else { 
    return (
      <section className='MoviesContainer'>
        {allPosters}
      </section>
    )
  };
};
  
export default Movies; 