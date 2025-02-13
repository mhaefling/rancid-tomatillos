import upvoteIcon from '../icons/upvote.png'
import downvoteIcon from '../icons/downvote.png'
import './VoteContainer.css'

function VoteContainer({count}) {
  return(
    <section className='VoteContainer'>
      <p>
      <button className='UpArrow' onClick={() => increaseVote(id)}>
        <img 
          src={upvoteIcon}
        />
      </button>

      {count}

      <button className='DownArrow'onClick={() => decreaseVote(id)}>
        <img
          src={downvoteIcon}
        />
      </button>
      </p>
    </section>
  );
}

export default VoteContainer;