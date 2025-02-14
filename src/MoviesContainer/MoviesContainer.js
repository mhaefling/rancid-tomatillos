import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'
import { useState, useEffect } from 'react';

function Movies({moviePosters}) {
  const [movies, setMovies] = useState(moviePosters);

  function increaseVote(id) {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote_count: movie.vote_count + 1 }
      } else {
        return { ...movie, movie }
      };
    });
    setMovies(updatedMovies)
  };

  function decreaseVote(id) {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote_count: movie.vote_count - 1 }
      } else {
        return { ...movie, movie }
      };
    });
    setMovies(updatedMovies)
  };

  function showMovieDetails(id) {

  }

  const allPosters = movies.map(poster => {
    return (
      <MoviePoster 
        posterImage={poster.poster_path} 
        voteCount={poster.vote_count} 
        id={poster.id} 
        increaseVote={increaseVote} 
        decreaseVote={decreaseVote} 
        showMovieDetails={showMovieDetails}
        key={poster.id}/>
    )
  });

  return (
      <section className='MoviesContainer'>
        {allPosters}
        {/* MovieDetails  */}
      </section>
  );
}
  
export default Movies;