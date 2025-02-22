import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails({ movieid }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 


  useEffect(() => {
    if (movieid) {
      showMovieDetails(movieid);
    };

    function showMovieDetails(id) {
      fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then(movieInfo => {
          setMovieDetails(movieInfo); 
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          navigate('/404');
        });
    };
    
  }, [movieid, navigate]);
  if (error) {
    return <p className="MovieDetails_error">{error}</p>;
  }

  if (!movieDetails || !movieDetails.genre_ids) { 
    return <p className="MovieDetails_genre">Loading movie genres...</p>;
  }

  const movieGenres = movieDetails.genre_ids.map(genre => (
    <p className="MovieDetails_genre" key={genre}>
      {genre}
    </p>
  ));

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
};

export default MovieDetails;