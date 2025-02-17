import './MovieDetails.css';

function MovieDetails({movieDetails}) {

  if(!movieDetails || !movieDetails.genre_ids) { 
    return (<p className="MovieGenre">Loading movie genres...</p>)
  }

  const movieGenres = movieDetails.genre_ids.map(genre => {
    return (
    <p className="MovieGenre">
      {genre}
    </p>
    )
  });

  return (
    <section className='MovieDetails'>
      <img className="MovieImage" src={movieDetails.backdrop_path} />
      <div className="MovieAttributes">
        <h2>{movieDetails.title}</h2>
        <div className="GenreContainer">
          {movieGenres}
        </div>
        <br />
        <p className="MovieOverview">{movieDetails.overview}</p>
      </div>
    </section>
  );
}

export default MovieDetails;