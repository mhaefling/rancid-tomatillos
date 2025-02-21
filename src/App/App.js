import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {

  const [home, setHome] = useState([])

  return (
    <main className='App'>
      <HeaderContainer setHome={setHome} />
      <Routes>
        <Route path="/" element={<MoviesContainer setHome={setHome} />} />
        <Route path="/movie/:movieid" element={<MoviesContainer />} />
      </Routes>
    </main>
  )
};

export default App;
