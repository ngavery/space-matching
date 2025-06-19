import { Navbar, Nav, Container} from 'react-bootstrap';
import { FaCog, FaBars } from 'react-icons/fa';
import './navbar.css';

function NavBar({onSettingsClick}) {
    return(
        <Navbar expand="lg" className="">
            <Container className="d-flex justify-content-between align-items-center position-relative">
                <FaBars onClick={onSettingsClick} className="settings-btn"/>
                
                <h1 className="m-0 position-absolute start-50 translate-middle-x text-white navbar-title">
                    Space Matching
                </h1>
                
                <p className="m-0"> Website by
                    <a className="avery" href="https://ngavery.github.io/averyng.github.io/" target="_blank" rel="noopener noreferrer"> Avery Ng </a>
                </p>

            </Container>
        </Navbar>

    );
}

export default NavBar;