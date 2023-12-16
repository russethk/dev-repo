import React, { useState } from 'react';
import Box from './Box';
import './BoxList.css';
import NewBoxForm from './NewBoxForm';

// BoxList is the parent component of Box and NewBoxForm
// BoxList is responsible for maintaining the list of boxes
// BoxList is responsible for adding and removing boxes
// BoxList is responsible for rendering a list of boxes (called boxComponents)

/** BoxList: maintains list of boxes
 *  - BoxList -> NewBoxForm
 *  - BoxList -> Box
 * 
 * State:
 * - boxes: array of objects
 * 
 *
 * App -> BoxList -> {NewBoxForm, Box}
 * 
*/

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  // add a new box to boxes array
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
  };

  // remove a box from boxes array
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };

  // render a list of boxes
  const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      <section className="BoxList">{boxComponents}</section>
    </div>
  );
}

export default BoxList;

