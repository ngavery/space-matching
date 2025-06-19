import './gamecomplete.css'
import { Modal , Button } from 'react-bootstrap';
import { BsRocketTakeoffFill } from "react-icons/bs";

function GameCompleteModal({ show, onClose, onNewGame}) {
  return (
    <Modal show={show} onHide={onClose} centered contentClassName="game-complete-modal">
      <Modal.Header closeButton>
        <Modal.Title className="game-complete-title">Game Complete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Well done! You matched all the planets.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="play-again-btn" variant="primary" onClick={() => { onNewGame(); onClose(); }}>
          Play Again
          <BsRocketTakeoffFill className="rocket-icon"/>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameCompleteModal;