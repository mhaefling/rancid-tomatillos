import './MoviesContainer.css';
import { useState, useEffect } from 'react';
import MoviePoster from '../MoviePoster/MoviePoster'
import MovieDetails from '../MovieDetails/MovieDetails';

function Movies({moviePosters, movieDetails, showHome, home}) {
  const [movies, setMovies] = useState(moviePosters);
  const [movie, setMovie] = useState([])

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
  setMovie([])
  const filteredMovie = movies.filter(movie => movie.id === id)
  setMovie([filteredMovie])
  showHome(movie)
  };

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

  if (home.length > 0) {
    return (
      <section className='MoviesContainer'>
        <MovieDetails movieDetails={movieDetails} />
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