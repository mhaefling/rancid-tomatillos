import './HeaderContainer.css';
import homeIcon from '../icons/home.png';
import { Link, useLocation } from 'react-router-dom';

function HeaderContainer({ setHome }) {
  const handleResetHome = () => {
    setHome([]);
  };

  const location = useLocation();

  return (
    <header>
      <h1>rancid tomatillos</h1>
        {location.pathname.includes("/movie/")  && (
          <button className='homeIcon'>
            <Link to={"/"} onClick={handleResetHome}>
              <img src={homeIcon} alt="Home icon" />
            </Link>
          </button>
        )}
    </header>
  );
}

export default HeaderContainer;