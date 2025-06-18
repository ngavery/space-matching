import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/singlecard';
import successSfxFile from './sounds/success-sfx.mp3'

const cardImages = [
    { "src": "/assets/blue-planet.png", matched: false },
    { "src": "/assets/brown-planet.png", matched: false },
    { "src": "/assets/earth-planet.png", matched: false },
    { "src": "/assets/green-planet.png", matched: false },
    { "src": "/assets/purple-planet.png", matched: false },
    { "src": "/assets/red-planet.png", matched: false },
    // { "src": "/assets/red-planet2.png", matched: false },
    // { "src": "/assets/ring-planet.png", matched: false },
    // { "src": "/assets/yellow-planet.png", matched: false },
]

function App() {

    // Initialise variables
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [card1, setCard1] = useState(null);
    const [card2, setCard2] = useState(null);
    const [disabled, setDisabled] = useState(false);

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
    }

    // Handle card click
    const handleChoice = (card) => {
        // If first card already picked, set second choice, else set first choice
        card1 ? setCard2(card) : setCard1(card)
    }

    // Compare two cards
    useEffect(() => {
        if (card1 && card2) {
            setDisabled(true)

            if (card1.src === card2.src) { // If cards match
                console.log('cards match')

                const successSfx = new Audio(successSfxFile);
                successSfx.play();
                
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === card1.src) {
                            return { ...card, matched: true } // Return new card with same src but matched as true
                        } else {
                            return card
                        }
                    })
                })
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
    }

    // Automatically start game when first loaded
    useEffect(() => {
        shuffleCards()
    }, [])

    return(
        <div className="app-div">
            <h1> Space Matching</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map((card) => (
                    <SingleCard 
                    key={card.id}
                    card={card} 
                    handleChoice={handleChoice} 
                    flipped={card === card1 || card === card2 || card.matched} // Flipped is true if user clicks on card or if card has been matched
                    disabled={disabled}
                    />
                ))}
            </div>
            <p>Turns: {turns} </p>
        </div>
    );
}

export default App;
