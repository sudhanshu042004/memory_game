import React from "react";
import "./GameResult.css";


function Winn () {
    const handleRefresh = () => {
        window.location.reload(); 
      };
    return (
        <div className="winn">
          <div className="winn-t">  <h1>YOU WINN!!</h1>
            <button onClick={handleRefresh} className="btn" >Wanna Play Again?</button></div>
        </div>
    )
}
export default Winn