import './MoviePoster.css';
import upVote from '../icons/upvote.png';
import downVote from '../icons/downvote.png';

function MoviePoster({posterImage, voteCount, id, submitVote, showMovieDetails}) {
  
  return (
    <section className='MoviePoster'>
      <button className='MoviePoster_button' onClick={() => showMovieDetails(id)}>
        <img className="MoviePoster_image" src={posterImage} alt="Movie Poster"/>
      </button>

      <div className="MoviePoster_votes">
        <button 
          className="MoviePoster_voteButton"
          onClick={() => submitVote(id, "up")}>

          <img className="MoviePoster_voteIcon" src={upVote} alt="Upvote" />
        </button>

        <span className="MoviePoster_voteCount">{voteCount}</span>

        <button 
          className="MoviePoster_voteButton"
          onClick={() => submitVote(id, "down")}>

          <img className="MoviePoster_voteIcon" src={downVote} alt="Downvote" /> 
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;