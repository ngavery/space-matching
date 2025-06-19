import './settings.css'
import { Modal, Form, Button } from 'react-bootstrap';
import { BsRocketTakeoffFill } from "react-icons/bs";

function Settings({ show, onClose, onNewGame, sfxEnabled, toggleSfx, toggleGameComplete }) {
    return (
        <Modal contentClassName="settings-modal" show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="settings-title">Menu</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Sound Effects"
                    checked={sfxEnabled}
                    onChange={toggleSfx}
                />
                </Form>

                {/*For development purposes*/}
                <a variant="primary" onClick={toggleGameComplete}>
                    Toggle Game Complete
                </a>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => { onClose(); onNewGame(); }} className="new-game-btn">
                    Start a New Game
                    <BsRocketTakeoffFill className="rocket-icon"/>
                </Button>
                <Button className="save-btn" variant="primary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Settings;