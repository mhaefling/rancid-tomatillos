import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({posters}) {

  const allPosters = posters.map(poster => {
    return (
      <MoviePoster posterImage={poster.poster_path} voteCount={poster.vote_count} id={poster.id} key={poster.id}/>
    )
  });

  return (
      <section className='MoviesContainer'>
        {allPosters}
      </section>
  );
}
  
export default Movies;