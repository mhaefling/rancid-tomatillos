import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer moviePosters={moviePosters}/>
    </main>
  );
};

export default App;
