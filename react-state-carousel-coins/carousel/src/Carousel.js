import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * - currCard: object with src and caption for current card
 * - total: integer for total number of cards
 * - arrow left and right: icons to navigate through cards
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

   // hide left arrow if currCardIdx is 0
  if (currCardIdx === 0) {
    return (
      <div className="Carousel">
        <h1>{title}</h1>
        <div className="Carousel-main">
          <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={currCardIdx + 1}
            totalNum={total}
          />
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
          />
        </div>
      </div>
    );
  }

  // hide right arrow if currCardIdx is at last index
  if (currCardIdx === total - 1) {
    return (
      <div className="Carousel">
        <h1>{title}</h1>
        <div className="Carousel-main">
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
          />
          <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={currCardIdx + 1}
            totalNum={total}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;

