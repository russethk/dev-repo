import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import candyImage from "./img/Nerds-Gummy.png";
import './Candy.css';


class Candy extends Component {
   constructor(props) {
        super(props);
        this.state = { 
            candies: [],
        };
        this.handleClick = this.handleClick.bind(this);
     }
    
    handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        this.setState(prevState => ({
            candies: [...prevState.candies, {x, y}]
        }));
    }

    render() {
        const candies = this.state.candies.map((candy, i) => (
            <img 
                key={i} 
                src={candyImage} 
                className="candy" 
                style={{top: `${candy.y}px`, left: `${candy.x}px`}}
                alt="nerds candy"
            />
        ));
        return (
            <div className="Candy">
                <img src={candyImage} alt="nerds candy" className="logo"/>
                <h1>candies eaten: {this.state.candies.length}</h1>
                <button onClick={this.handleClick}>NOM NOM NOM</button>
                <Link to="/">Go Back</Link>
                {candies}
            </div>
        );
    }
}

export default Candy;