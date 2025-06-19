import './App.css';
import { useEffect, useState } from 'react';

// Components
import Settings from './components/settings';
import SingleCard from './components/singlecard';
import NavBar from './components/navbar';
import GameCompleteModal from './components/gamecomplete';
import StartScreen from './components/startscreen';

// Sound effects
import successSfxFile from './sounds/success-sfx.mp3'
import cardFlipSfx1File from './sounds/card-flip-sfx1.mp3'
import cardFlipSfx2File from './sounds/card-flip-sfx2.mp3'

// images 
import bluePlanet from './img/blue-planet.png'
import brownPlanet from './img/brown-planet.png'
import earthPlanet from './img/earth-planet.png'
import greenPlanet from './img/green-planet.png'
import purplePlanet from './img/purple-planet.png'
import redPlanet from './img/red-planet.png'
import tieFighter from './img/tie-fighter.png'

const cardImages = [
    { src: bluePlanet, matched: false },
    { src: brownPlanet, matched: false },
    { src: earthPlanet, matched: false },
    { src: greenPlanet, matched: false },
    { src: purplePlanet, matched: false },
    { src: redPlanet, matched: false },
    // { "src": "/assets/red-planet2.png", matched: false },
    // { "src": "/assets/ring-planet.png", matched: false },
    // { "src": "/assets/yellow-planet.png", matched: false },
]

function App() {

    // UseState initialisation
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [sfxEnabled, setSfxEnabled] = useState(true);
    const [gameComplete, setGameComplete] = useState(false);
    const [rocketLaunched, setRocketLaunched] = useState(false);
    const [showStartScreen, setShowStartScreen] = useState(true);
    const [showCards, setShowCards] = useState(false);

    // New game: shuffle cards and reset turn counter
    const shuffleCards = () => {
        // Duplicate cardImages
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5) // Shuffle array
            .map((card) => ({...card, id: Math.random()})) // Assign random id

        setCard1(null)
        setCard2(null)
        setCards(shuffledCards)
        setTurns(0)
        setGameComplete(false)
        setRocketLaunched(false)
        setShowStartScreen(true)
        setShowCards(false)
    }

    const startGame = () => {
        shuffleCards();
        setShowStartScreen(false);
        setShowCards(true);
    };

    // Handle card click
    const handleChoice = (card) => {
        
        const cardFlipSfx1 = new Audio(cardFlipSfx1File);
        if (sfxEnabled) {
            cardFlipSfx1.play();
        }
        // If first card already picked, set second choice, else set first choice
        card1 ? setCard2(card) : setCard1(card)
    }

    // Compare two cards
    useEffect(() => {
    if (card1 && card2) {
        setDisabled(true);

        if (card1.src === card2.src) {
            console.log('cards match');

            if (sfxEnabled) {
                new Audio(successSfxFile).play();
            }

            setCards(prevCards => {
                const updatedCards = prevCards.map(card => {
                    if (card.src === card1.src) {
                        return { ...card, matched: true };
                    } else {
                        return card;
                    }
                });

                const allMatched = updatedCards.every(card => card.matched);
                if (allMatched) {
                    setTimeout(() => setGameComplete(true), 600);
                }

                return updatedCards;
            });

                resetTurn()
            } else { // If cards don't match
                console.log('cards do not match')
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [card1, card2])

    // Reset choices
    const resetTurn = () => {
        setCard1(null)
        setCard2(null)
        setTurns(prevTurns => prevTurns + 1) // Increment turn counter
        setDisabled(false)
        const cardFlipSfx2 = new Audio(cardFlipSfx2File);
        if (sfxEnabled) {
            cardFlipSfx2.play();
        }
    }

    // Automatically start game when first loaded
    useEffect(() => {
        shuffleCards()
    }, [])

    // Toggle SFX
    const toggleSfx = () => setSfxEnabled(prev => !prev);

    // FOR DEVELOPMENT: Toggle game complete
    const toggleGameComplete = () => setGameComplete(prev => !prev);

    return(
        <>
            <NavBar onSettingsClick={() => setShowSettings(true)}/>
            <div className="app-div">

                <Settings 
                    show={showSettings} 
                    onClose={() => setShowSettings(false)} 
                    onNewGame={shuffleCards}
                    sfxEnabled={sfxEnabled}
                    toggleSfx={toggleSfx}
                    toggleGameComplete={toggleGameComplete}
                />

                <GameCompleteModal
                    show={gameComplete}
                    onClose={() => setGameComplete(false)}
                    onNewGame={() => {
                        shuffleCards();
                        setGameComplete(false);
                    }}
                />

                {showStartScreen &&
                    <StartScreen
                        onNewGame={startGame}
                    />
                }
                
                {showCards && (
                <>
                    <div className="card-grid">
                    {cards.map((card) => (
                        <SingleCard 
                        key={card.id}
                        card={card} 
                        handleChoice={handleChoice} 
                        flipped={card === card1 || card === card2 || card.matched}
                        disabled={disabled}
                        />
                    ))}
                    </div>
                    <p className="turn-counter">Turns: {turns}</p>
                </>
                )}
                <div className="website-footer">
                    <p className="website1"> Website by
                        <a className="avery1" href="https://ngavery.github.io/averyng.github.io/" target="_blank" rel="noopener noreferrer"> Avery Ng </a>
                    </p>
                </div>
            
            </div>        
                {gameComplete && !rocketLaunched && (
                    <img src={tieFighter}
                    className="rocket-fly"
                    alt="Rocket taking off"
                    onAnimationEnd={() => setRocketLaunched(true)}
            />
            )}
        </>

    );
}

export default App;


