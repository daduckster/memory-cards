import React from 'react'
import styles from './Overview.module.scss';
import OverviewFailScreen from './OverviewFailScreen';


function Overview({cards, changeCards}) {

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.gameContainer}>
      {/* <OverviewFailScreen isFail={isFail} /> */}
      
        <div className={styles.cardContainer}>
          <img src={cards[0].src} alt={cards[0].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[1].src} alt={cards[1].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[2].src} alt={cards[2].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[3].src} alt={cards[3].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[4].src} alt={cards[4].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[5].src} alt={cards[5].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[6].src} alt={cards[6].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[7].src} alt={cards[7].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[8].src} alt={cards[8].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[9].src} alt={cards[9].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[10].src} alt={cards[10].alt} className = {styles.card} onClick={changeCards} />
        </div>
        <div className={styles.cardContainer}>
        <img src={cards[11].src} alt={cards[11].alt} className = {styles.card} onClick={changeCards} />
        </div>
      </div>

      <div className={styles.explanationContainer}>
        <p>*explaining the game rules*</p>
      </div>
    </div>
  )
}

export default Overview