import './MoviePoster.css';

function MoviePoster({posterImage, voteCount}) {
  return (
    <section className='MoviePoster'>
      <img src={posterImage} />
      <p>{voteCount}</p>
    </section>
  );
}

export default MoviePoster;