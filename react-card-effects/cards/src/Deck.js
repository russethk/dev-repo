import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

/** Deck: uses deck API, allows drawing card at a time. 
 * 
 * Displays a deck of cards, one card at a time. 
 * 
 * When the page loads, go to the Deck of Cards API at API_BASE_URL = "https://deckofcardsapi.com/api/deck"
 * to create a new deck. 
 * 
 * Show a button on the page that will let you draw a card.
 * 
*/

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

/** Deck: uses deck API, allows drawing card at a time. */

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);

  // these are toggled to true to begin events
  const [isDrawing, setIsDrawing] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  

  // ref to the timer ID so we can stop it on unmount
  const timerRef = useRef(null);

  // useEffect to load the deck from the API
    useEffect(function loadDeckFromAPI() {
        async function fetchData() {
        let d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        setDeck(d.data);
        }
        fetchData();
    }, [setDeck]);

    // useEffect to draw a card and add it to the drawn array
    useEffect(function drawCardAddToDrawn() {
        async function fetchCard() {
        try {
            let drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);

            if (drawRes.data.remaining === 0) throw new Error("Deck empty!");

            const card = drawRes.data.cards[0];

            setDrawn(d => [
            ...d,
            {
                id: card.code,
                name: card.suit + " " + card.value,
                image: card.image,
            },
            ]);
         } catch (err) {
            setIsDrawing(false);
            alert(err);
         }
        }

        if (isDrawing && !timerRef.current) {
            timerRef.current = setInterval(fetchCard, 500);
        } else if (!isDrawing && timerRef.current) {
             stopDrawingCards()
        }

        function stopDrawingCards() {
            if (timerRef.current) clearInterval(timerRef.current)
            timerRef.current = null;
        }
        return stopDrawingCards;    
    }, [isDrawing, deck]);              


    // useEffect to shuffle the deck from the API
    useEffect(function shuffleDeckFromAPI() {
        async function shuffleDeck(deck) {
            try {
                await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
                setDrawn([]);
                setIsDrawing(false);
                setIsShuffling(false);
            } catch (err) {
                alert(err);   
            }
        }

        if (isShuffling && deck) shuffleDeck(deck);
    }, [isShuffling, deck]);

    /** Function to draw card: change the state & effect will kick in */
    function toggleDraw() {
        setIsDrawing(auto => !auto);
    }

    /** Function to shuffle the deck: change the state & effect will kick in */
    function startShuffling() {
        return setIsShuffling(true);
    }

    /* Return draw button and cards (disabled if shuffling) */
    function renderDrawBtnIfOk() {
        if (!deck) return null;

        return (
            <button 
                className="Deck-draw"
                onClick={toggleDraw}
                disabled={isShuffling}>
             {isDrawing ? "STOP DRAWING" : "START DRAWING"}
            </button>
        );    
    }

    /* Return shuffle button (disable if already shuffling) */
    function renderShuffleBtnIfOk() {
        if (!deck) return null;

        return (
            <button 
                className="Deck-shuffle"
                onClick={startShuffling}
                disabled={isDrawing}>
            SHUFFLE DECK
            </button>
        );    
    }

    /* Render the buttons and cards*/

    return (
        <main className="Deck">
            
            <div>{renderDrawBtnIfOk()}</div>
            <div>{renderShuffleBtnIfOk()}</div>

            <div className="Deck-cardarea">{
                drawn.map(c => (
                    <Card key={c.id} name={c.name} image={c.image} />
                ))}
            </div>
        </main>
    );
}

export default Deck;