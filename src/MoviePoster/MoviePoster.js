import './MoviePoster.css';
import upVote from '../icons/upvote.png';
import downVote from '../icons/downvote.png';

function MoviePoster({posterImage, voteCount, id, increaseVote, decreaseVote, showMovieDetails}) {
  
  return (
    <section className='MoviePoster'>
      <button onClick={() => showMovieDetails(id)}>
        <img className="posterImage" src={posterImage} />
      </button>
      <p>
        <button onClick={() => increaseVote(id)}>
          <img className="voteButton" src={upVote} />
        </button>
        {voteCount}
        <button onClick={() => decreaseVote(id)}>
          <img className="voteButton" src={downVote} /> 
        </button>
      </p>
    </section>
  );
}

export default MoviePoster;