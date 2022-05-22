import styles from './SingleCard.module.scss'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    !disabled && handleChoice(card)
  }

  return (
    <div className={styles.card}>
      <img className={`${styles.front} ${styles.img} ${flipped ? `${styles.flipped}` : ""}`} src={card.src} alt='card front' />
      <img onClick={handleClick}
           className={`${styles.back} ${styles.img}  ${flipped ? `${styles.flipped}` : ""}`}
           src="./img/bgcover.png"
           alt='card back'
      />
    </div>
  )
}
