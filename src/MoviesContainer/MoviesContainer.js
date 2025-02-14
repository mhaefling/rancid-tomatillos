import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({moviePosters, increaseVote, decreaseVote}) {

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