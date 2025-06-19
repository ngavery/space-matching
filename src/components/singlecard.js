import './singlecard.css';
import rockTexture from '../img/rock-texture.png'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return(
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="card-front" src={card.src} alt="card-front"/>
                <img 
                    className="card-back" 
                    src={rockTexture} 
                    onClick={handleClick} 
                    alt="card-back"/>
            </div>
        </div>
    );
}

export default SingleCard;