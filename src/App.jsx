import styles from './App.module.scss';

const cardImages = [
  { "src": "/img/blue-1.jpeg" },
  { "src": "/img/brain-1.jpeg" },
  { "src": "/img/green-1.jpeg" },
  { "src": "/img/heart-1.jpeg" },
  { "src": "/img/orange-1.jpeg" },
  { "src": "/img/red-1.jpeg" }
]

function App() {
  return (
    <div className={styles.App}>
      <h1>Magic Match</h1>
      <button className={styles.btn}>New Game</button>
    </div>
  );
}

export default App;
