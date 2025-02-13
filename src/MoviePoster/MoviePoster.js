import './MoviePoster.css';
import VoteContainer from '../VoteContainer/VoteContainer'

function MoviePoster({posterImage, id, voteCount}) {
  function increaseVote () {
    voteCount++
  }

  function decreaseVote () {
    voteCount--
  }

  return (
    <section className='MoviePoster'>
      <img className='Poster' src={posterImage} />
      <VoteContainer 
        count={voteCount}
        increaseVote={increaseVote}
        decreaseVote={decreaseVote}
        id={id}
        />
    </section>
  );
}

export default MoviePoster;