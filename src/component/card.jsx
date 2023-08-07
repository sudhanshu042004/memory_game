import { useEffect } from "react";
import { useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Card({ pokemonId, handleCardClick }) {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => response.json())
      .then((data) => {
        setPokeData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pokemonId]);

  return (
    <section> 
     <div className="card-game" onClick={() => handleCardClick(pokemonId)}>
        {pokeData ? (
          <div className="card">
            <div className="card-data">
              {pokeData.sprites && (
                <img src={pokeData.sprites.front_default} alt={pokeData.name} />
              )}
              <h1 className="card-name">{pokeData.name}</h1>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
export default Card;
