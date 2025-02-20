import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {

  const [home, setHome] = useState([])

  return (
    <main className='App'>
      <HeaderContainer setHome={setHome} home={home} />
      <Routes>
        <Route path="/" element={<MoviesContainer setHome={setHome} home={home} />} />
        <Route path="/:movieid" element={<MoviesContainer setHome={setHome} home={home} />} />
      </Routes>
    </main>
  )
};

export default App;
