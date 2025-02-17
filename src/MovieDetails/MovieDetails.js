import './MovieDetails.css';

function MovieDetails({movieDetails}) {

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
        {movieGenres}
        <br />
        <p className="MovieOverview">{movieDetails.overview}</p>
      </div>
    </section>
  );
}

export default MovieDetails;