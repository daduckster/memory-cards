import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import icon1 from './assets/Overview/1.svg';
import icon2 from './assets/Overview/2.svg';
import icon3 from './assets/Overview/3.svg';
import icon4 from './assets/Overview/4.svg';
import icon5 from './assets/Overview/5.svg';
import icon6 from './assets/Overview/6.svg';
import icon7 from './assets/Overview/7.svg';
import icon8 from './assets/Overview/8.svg';
import icon9 from './assets/Overview/9.svg';
import icon10 from './assets/Overview/10.svg';
import icon11 from './assets/Overview/11.svg';
import icon12 from './assets/Overview/12.svg';

function App() {

  const [cards, setCards] = useState([
    {src:icon1, alt:'frappe', isClicked:false},
    {src:icon2, alt:'americano', isClicked:false},
    {src:icon3, alt:'take away', isClicked:false},
    {src:icon4, alt:'cappuccino', isClicked:false},
    {src:icon5, alt:'irish coffee', isClicked:false},
    {src:icon6, alt:'caffe latte', isClicked:false},
    {src:icon7, alt:'double espresso', isClicked:false},
    {src:icon8, alt:'espresso', isClicked:false},
    {src:icon9, alt:'latte macchiato', isClicked:false},
    {src:icon10, alt:'espresso macchiato', isClicked:false},
    {src:icon11, alt:'ristretto', isClicked:false},
    {src:icon12, alt:'glace', isClicked:false},
  ])

  const [isFail, setIsFail] = useState(false)

  useEffect(() =>{
    shuffle(cards)
  }, [cards])

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function changeCards(e) {
    const cardImg = e.target
    const alt = e.target.alt
    const card = cards.find(card => card.alt === alt)
    if (card.isClicked === false) {
      const updatedCards = cards.map(card => {
        if (card.alt === alt) {
          card.isClicked=true
        }
        return card;
      })
      updateScore()
      setCards(updatedCards)
    } else if (card.isClicked === true) {
      confirmFail(cardImg)
    }
    
  }

  function updateScore(){
    return null
  }

  function confirmFail(cardImg) {
    cardImg.classList.add('fail')
    setIsFail(true)
  }

  return (
    <div>
      <Navbar />
      <Overview cards={cards} changeCards={changeCards} isFail={isFail} />
    </div>
  );
}

export default App;
