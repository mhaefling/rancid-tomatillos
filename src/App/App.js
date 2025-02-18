import './App.css';
import { useState, useEffect } from 'react';
import homeIcon from '../icons/home.png';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [home, setHome] = useState([])
  const [movies, setMovies] = useState([])

  function getMoviePosters() {
    fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/')
    .then(response => response.json())
    .then(movies => setMovies(movies))
    .catch(error => console.log(error.message))
  } 

  useEffect(() => {
    getMoviePosters()    
  }, [movies])

  if (home.length > 0) {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
          <button className='homeIcon'> 
            <img src={homeIcon} 
              alt="Home icon" 
              onClick={() => setHome([])} 
            />
          </button>
        </header>
        <MoviesContainer movies={movies} setHome={setHome} home={home} />
      </main>
    )
  } else {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
        </header>
        <MoviesContainer movies={movies} setHome={setHome} home={home} />
      </main>
    )
  };

};

export default App;
