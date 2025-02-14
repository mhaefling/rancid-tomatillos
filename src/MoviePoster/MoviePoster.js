import './MoviePoster.css';
import upVote from '../icons/upvote.png';
import downVote from '../icons/downvote.png';

function MoviePoster({posterImage, voteCount, id, increaseVote, decreaseVote}) {
  
  return (
    <section className='MoviePoster'>
      <img className="posterImage" src={posterImage} />
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