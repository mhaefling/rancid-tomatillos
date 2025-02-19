import './App.css';
import { useState } from 'react';
import homeIcon from '../icons/home.png';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [home, setHome] = useState([])

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
        <MoviesContainer setHome={setHome} home={home} />
      </main>
    )
  } else {
    return (
      <main className='App'>
        <header>
          <h1>rancid tomatillos</h1>
        </header>
        <MoviesContainer setHome={setHome} home={home} />
      </main>
    )
  };

};

export default App;
