import './settings.css'
import { Modal, Form, Button } from 'react-bootstrap'; 

function Settings({ show, onClose, onNewGame, sfxEnabled, toggleSfx }) {
    return (
        <Modal contentClassName="settings-modal" show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="settings-title">Settings</Modal.Title>
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
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => { onClose(); onNewGame(); }} className="new-game-btn">
                    Start a new game
                </Button>
                <Button className="save-btn" variant="primary" onClick={onClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Settings;