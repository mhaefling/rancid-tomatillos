import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'
import { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';

function Movies({moviePosters}) {
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
  const filteredMovie = movies.filter(movie => movie.id === id)
  setMovie([filteredMovie])
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


  if (movie.length > 0) {
    return (
      <section className='MoviesContainer'>
        <MovieDetails movieInfo={movie} />
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