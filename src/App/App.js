import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <main className='App'>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movie/:movieid" element={<MoviesContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
};

export default App;
