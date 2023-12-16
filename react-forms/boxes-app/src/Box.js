import React from "react";
import "./Box.css";

/** Individual colored box.
 * 
 * Props:
 * - id: id of this box
 * - handleRemove: function to call in parent
 * - width: width in pixels or percentage
 * - height: height in pixels or percentage
 * - backgroundColor: background color for box
 * 
 * State: none
 * 
 * App -> BoxList -> Box
 */

function Box({ 
  id,
  handleRemove,
  width = 5, 
  height = 5,
  backgroundColor = "blue", 
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        className="Box"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor
        }}
      />
      <button className="button" onClick={remove}>X</button>
    </div>
  );
}

export default Box;