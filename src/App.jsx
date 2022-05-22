import styles from './App.module.scss';
import { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard'
const cardImages = [
  { "src": "./img/blue-1.jpeg", matched: false },
  { "src": "./img/brain-1.jpeg", matched: false },
  { "src": "./img/green-1.jpeg", matched: false },
  { "src": "./img/heart-1.jpeg", matched: false },
  { "src": "./img/orange-1.jpeg", matched: false },
  { "src": "./img/red-1.jpeg", matched: false }
]

function App() {
  console.clear()
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      setCards(shuffledCards)
      setTurns(0)
      setChoiceOne(null)
      setChoiceTwo(null)
  }

  //start new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])


  useEffect(()=> {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => prevCards.map(card => {
          if (card.src === choiceTwo.src) {
            return {...card, matched: true}
          } else {
            return card
          }
        }))
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 800)
      }
    }
  }, [choiceOne, choiceTwo])

  //reset choices and increase turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className={styles.App}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} className={styles.btn}>New Game</button>
      <div className={styles.cardsContainer}>
        {cards.map(card => (
          <SingleCard 
            handleChoice={handleChoice} 
            card={card} 
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
