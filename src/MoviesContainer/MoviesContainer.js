import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({moviePosters, setMovies}) {

  function increaseVote(id) {
    const updatedMovies = moviePosters.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote_count: movie.vote_count + 1 }
      } else {
        return { ...movie, movie }
      };
    });
    setMovies(updatedMovies)
  };

  function decreaseVote(id) {
    const updatedMovies = moviePosters.map(movie => {
      if (movie.id === id) {
        return { ...movie, vote_count: movie.vote_count - 1 }
      } else {
        return { ...movie, movie }
      };
    });
    setMovies(updatedMovies)
  };

  const allPosters = moviePosters.map(poster => {
    return (
      <MoviePoster 
        posterImage={poster.poster_path} 
        voteCount={poster.vote_count} 
        id={poster.id} 
        increaseVote={increaseVote} 
        decreaseVote={decreaseVote} 
        key={poster.id}/>
    )
  });

  return (
      <section className='MoviesContainer'>
        {allPosters}
      </section>
  );
}
  
export default Movies;