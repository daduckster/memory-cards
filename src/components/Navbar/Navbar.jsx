import React, {useState} from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.navContainer}>

      <p>COFFEE MEMORY</p>

      <div className={styles.navScoreContainer}>
        <div className={styles.navScorePlate}>
          <p>Score:</p>
          <p>0</p>
        </div>

        <div className={`${styles.navScorePlate} ${styles.navScoreBest}`}>
          <p>Best:</p>
          <p>0</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar