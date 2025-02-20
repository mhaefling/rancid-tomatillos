import './HeaderContainer.css';
import homeIcon from '../icons/home.png';
import { Link, useLocation } from 'react-router-dom';

function HeaderContainer({ setHome, home }) {
    const handleResetHome = () => {
        setHome([]);
    };

    const location = useLocation();

    return (
        <header>
            <h1>rancid tomatillos</h1>
            {/* Show the home icon if we are on the MovieDetails page */}
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