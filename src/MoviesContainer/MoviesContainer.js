import './MoviesContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieDetails from '../MovieDetails/MovieDetails';

function Movies() {
  const { movieid } = useParams();
  const [movies, setMovies] = useState([])

  function getMoviePosters() {
    fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/')
    .then(response => response.json())
    .then(movies => setMovies(movies))
    .catch(error => console.log("Error Downloading Movie Posters: ", error.message))
  };

  useEffect(() => {
    getMoviePosters()    
  }, []);

  function submitVote(id, voteType) {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ vote_direction: `${voteType}` }),
    })
    .then(response => response.json())
    .then(data => updateMovies(id, data))
    .catch(error => console.log('Unsuccessful Vote: ', error.message))
  };

  function updateMovies(id, updatedMovie) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return updatedMovie
      } else {
        return movie
      };
    });
    setMovies(updatedMovies)
  };

  const allPosters = movies.map(poster => {
    return (
      <MoviePoster 
        posterImage={poster.poster_path}
        voteCount={poster.vote_count}
        submitVote={submitVote}
        id={poster.id}
        key={poster.id}
      />
    )
  });

  if (movieid) {
    return (
      <section className='MoviesContainer'>
        <MovieDetails movieid={movieid} />
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