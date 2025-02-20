import './HeaderContainer.css'
import homeIcon from '../icons/home.png';
import { Link } from 'react-router-dom';

function HeaderContainer({ setHome, home }) {
    const handleResetHome = () => {
        setHome([]);
    };

    if (home.length > 0) {
        return (
            <header>
                <h1>rancid tomatillos</h1>
                    <button className='homeIcon'> 
                        <Link to={"/"} onClick={handleResetHome}>
                            <img src={homeIcon} 
                                alt="Home icon" 
                            />
                        </Link>
                    </button>
            </header>
        )
    } else {
        return (
            <header>
                <h1>rancid tomatillos</h1>
            </header>
        )
    }
};

export default HeaderContainer