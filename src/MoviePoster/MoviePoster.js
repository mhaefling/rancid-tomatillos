import './MoviePoster.css';
import upVote from '../icons/upvote.png';
import downVote from '../icons/downvote.png';
import { NavLink } from 'react-router-dom';

function MoviePoster({ posterImage, voteCount, id, submitVote }) {
  return (
    <section className='MoviePoster'>
      <NavLink to={`/movie/${id}`}>
        <img className="MoviePoster_thumbnail" src={posterImage} alt="Movie Poster" />
      </NavLink>

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
