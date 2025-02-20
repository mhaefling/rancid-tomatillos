import './MovieDetails.css';

function MovieDetails({movieDetails}) {

  if(!movieDetails || !movieDetails.genre_ids) { 
    return (<p className="MovieDetails_genre">Loading movie genres...</p>)
  }

  const movieGenres = movieDetails.genre_ids.map(genre => {
    return (
    <p className="MovieDetails_genre" key={genre}>
      {genre}
    </p>
    )
  });

  return (
    <section className='MovieDetails'>
      <img className="MovieDetails_image" src={movieDetails.backdrop_path} alt="Movie poster"/>
      <div className="MovieDetails_attributes">
        <h2 className="MovieDetails_title">{movieDetails.title}</h2>
        <div className="MovieDetails_genreList">
          {movieGenres}
        </div>
        <p className="MovieDetails_overview">{movieDetails.overview}</p>
      </div>
    </section>
  );
}

export default MovieDetails;