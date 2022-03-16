import React, {useState} from 'react'
import styles from './Overview.module.scss'

function Overview() {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.gameContainer}>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
        <div className={styles.cardContainer}></div>
      </div>

      <div className={styles.explanationContainer}>
        <p>*explaining the game rules*</p>
      </div>
    </div>
  )
}

export default Overview