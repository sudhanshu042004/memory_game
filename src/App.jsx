import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./component/card";
import Loose from "./component/loose";
import Navbar from "./component/navbar";
import Score from "./component/score";
import Winn from "./component/winn";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [score, setScore] = useState(0);
  const [clickedCard, setClickedCard] = useState([]);
  const myArray = [10, 2, 5, 3, 7, 9, 6, 1, 8, 4];
  const pokemonIds = shuffleArray(myArray);
  const [chances, setChances] = useState(3);
  const [winChance, setWinChance] = useState(false);
  const [win, setWin] = useState(false);

  const handleCardClick = (id) => {
    if (clickedCard.includes(id)) {
      setScore(0);
      setClickedCard([]);
      setChances((prevChances) => prevChances - 1);
    } else {
      setScore((prevScore) => prevScore + 1);
      setClickedCard([...clickedCard, id]);
    }
  };

  useEffect(() => {
    if (chances === 0) {
      setWin(false);
    } else if (score >= 10) {
      setWin(true);
    }
  }, [chances, score]);

  return (
    <div>
      <Navbar />

      <Score score={score} chances={chances} />

      {win ? <Winn /> : null}

      {chances > 0 && !win ? (
        <div className="card-container">
          {pokemonIds.map((id) => (
            <Card key={id} pokemonId={id} handleCardClick={handleCardClick} />
          ))}
        </div>
      ) : null}

      {!win && chances === 0 ? <Loose /> : null}
    </div>
  );
}

export default App;
