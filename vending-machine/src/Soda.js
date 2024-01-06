import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import sodaImage from "./img/Coca-Cola-Cherry.png";
import './Soda.css';


class Soda extends Component {
   constructor(props) {
        super(props);
        this.state = { 
            bottles: [],
        };
        this.handleClick = this.handleClick.bind(this);
     }
    
    handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        this.setState(prevState => ({
            bottles: [...prevState.bottles, {x, y}]
        }));
    }

    render() {
        const bottles = this.state.bottles.map((bottle, i) => (
            <img 
                key={i} 
                src={sodaImage} 
                className="bottle" 
                style={{top: `${bottle.y}px`, left: `${bottle.x}px`}}
                alt="bottle of soda"
            />
        ));
        return (
            <div className="Soda">
                <img src={sodaImage} alt="bottle of soda" className="logo"/>
                <h1>sodas drank: {this.state.bottles.length}</h1>
                <button onClick={this.handleClick}>aaahhhh....</button>
                <Link to="/">Go Back</Link>
                {bottles}
            </div>
        );
    }
}

export default Soda;