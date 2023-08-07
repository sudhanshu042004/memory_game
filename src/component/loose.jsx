import React from "react";
import "./GameResult.css";


function Loose () {
    const handleRefresh = () => {
        window.location.reload(); 
      };
    return (
        <div className="loose">
          <div className="loose-t">  <h1>YOU LOOSE!!</h1>
            <button onClick={handleRefresh} className="btn" >Play Again</button></div>
        </div>
    )
}
export default Loose