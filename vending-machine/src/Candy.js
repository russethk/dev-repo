import React from 'react';
import candyImage from "./img/Nerds-Gummy.png";

function Candy() {
    return (
        <div className="Candy">
        <h1>Candy</h1>
        <img src={candyImage} alt="Nerds Gummy Rainbow Clusters"/>
        </div>
    );
}


export default Candy;