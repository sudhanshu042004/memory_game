import { useEffect } from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function Score({ score, chances }) {
  return (
    <div className="score-card">
      <div className="score-t">
        <p>Score : {score}</p>
        <p>
          life :
          {[...Array(chances)].map((_, index) => (
            <AiFillHeart key={index} size={30} color="red" />
          ))}
        </p>
      </div>
    </div>
  );
}
export default Score;
