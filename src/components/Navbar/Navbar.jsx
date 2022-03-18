import React, {useState} from 'react'
import styles from './Navbar.module.scss'

function Navbar({counter, bestScore, resetGame, isFail}) {

  return (
    <div className={styles.navContainer}>

      <p>COFFEE MEMORY</p>

      {isFail && <button type="button" className={`${styles.tryAgainButton} tryAgainBtn`} onClick={resetGame}>TRY AGAIN</button>}
      

      <div className={styles.navScoreContainer}>
        <div className={styles.navScorePlate}>
          <p>Score:</p>
          <p>{counter}</p>
        </div>

        <div className={`${styles.navScorePlate} ${styles.navScoreBest}`}>
          <p>Best:</p>
          <p>{bestScore}</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar