import './singlecard.css';

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
                    src="./assets/rock-texture.png" 
                    onClick={handleClick} 
                    alt="card-back"/>
            </div>
        </div>
    );
}

export default SingleCard;