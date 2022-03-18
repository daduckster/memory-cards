import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import {CARDS} from './cards.js'


function App() {

  const [cards, setCards] = useState(CARDS)
  const [counter, setCounter] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [isFail, setIsFail] = useState(false)

  const lastCard = document.querySelector('.fail')
  const tryAgainButton = document.querySelector('.tryAgainBtn')

  useEffect(() =>{
    shuffle(cards)
  }, [counter])

  function shuffle(array) {
    const shuffledArray = [...array]
    let currentIndex = shuffledArray.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
    setCards(shuffledArray)
  }

  function changeCards(e) {
    const cardImg = e.target
    const alt = e.target.alt
    const card = cards.find(card => card.alt === alt)
    if (card.isClicked === false) {
      cardImg.classList.add('win')
      setTimeout(() =>{
        cardImg.classList.remove('win')
      }, 150)
      const updatedCards = [...cards]
      updatedCards.map(card => {
        if (card.alt === alt) {
          card.isClicked=true
        }
        return card;
      })
      setCounter(counter+1)
      setCards(updatedCards)
    } else if (card.isClicked === true) {
      confirmFail(cardImg)
    }
    
  }

  function confirmFail(cardImg) {
    cardImg.classList.add('fail')
    setIsFail(true)
    updateScore()
}

function updateScore(){
  if (bestScore<counter) {
    setBestScore(counter)
  } else {
    return null
  }
}

  function resetGame() {
    CARDS.map(card => {
      card.isClicked = false;
      return card
    })
    setCards(CARDS)
    setIsFail(false)
    setCounter(0)
    lastCard.classList.remove('fail')
  }

  return (
    <div>
      <Navbar counter={counter} bestScore={bestScore} resetGame={resetGame} isFail={isFail} />
      <Overview cards={cards} changeCards={changeCards} isFail={isFail} />
    </div>
  );
}

export default App;
