import { Navbar, Nav, Container} from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import './navbar.css';

function NavBar({onSettingsClick}) {
    return(
        <Navbar expand="lg" className="">
            <Container className="d-flex justify-content-between align-items-center position-relative">
                
                <div style={{ width: '24px' }}></div>
                
                <h1 className="m-0 position-absolute start-50 translate-middle-x text-white navbar-title">
                    Space Matching
                </h1>
                
                <FaCog onClick={onSettingsClick} className="settings-btn"/>

            </Container>
        </Navbar>

    );
}

export default NavBar;