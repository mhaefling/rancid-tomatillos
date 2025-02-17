import './MoviePoster.css';
import upVote from '../icons/upvote.png';
import downVote from '../icons/downvote.png';

function MoviePoster({posterImage, voteCount, id, submitVote, showMovieDetails}) {
  
  return (
    <section className='MoviePoster'>
      <button onClick={() => showMovieDetails(id)}>
        <img className="posterImage" src={posterImage} />
      </button>
      <p>
        <button onClick={() => submitVote(id, "up")}>
          <img className="voteButton" src={upVote} />
        </button>
        {voteCount}
        <button onClick={() => submitVote(id, "down")}>
          <img className="voteButton" src={downVote} /> 
        </button>
      </p>
    </section>
  );
}

export default MoviePoster;