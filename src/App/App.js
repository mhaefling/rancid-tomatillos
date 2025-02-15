import './App.css';
import { useState, useEffect } from 'react';
import homeIcon from '../icons/home.png';

// Example imports (for later):
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [home, setHome] = useState([])

  function showHome(movie) {
    setHome([movie])
  }

  function hideHome() {
    setHome([])
  }

  if (home.length > 0) {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
            <button onClick={hideHome}>
              <img className="homeButton" src={homeIcon} />
            </button>
        </header>
        <MoviesContainer moviePosters={moviePosters} movieDetails={movieDetails} showHome={showHome} home={home} />
      </main>
    )
  } else {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
        </header>
        <MoviesContainer moviePosters={moviePosters} movieDetails={movieDetails} showHome={showHome} home={home} />
      </main>
    )
  };

};

export default App;
