import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import chipsImage from "./img/Doritos-Nacho-Cheese.png";
import './Chips.css';


class Chips extends Component {
   constructor(props) {
        super(props);
        this.state = { 
            bags: [],
        };
        this.handleClick = this.handleClick.bind(this);
     }
    
    handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        this.setState(prevState => ({
            bags: [...prevState.bags, {x, y}]
        }));
    }

    render() {
        const bags = this.state.bags.map((bag, i) => (
            <img 
                key={i} 
                src={chipsImage} 
                className="bag" 
                style={{top: `${bag.y}px`, left: `${bag.x}px`}}
                alt="bag of chips"
            />
        ));
        return (
            <div className="Chips">
                <img src={chipsImage} alt="bag of chips" className="logo"/>
                <h1>bags eaten: {this.state.bags.length}</h1>
                <button onClick={this.handleClick}>nom nom nom</button>
                <Link to="/">Go Back</Link>
                {bags}
            </div>
        );
    }
}

export default Chips;