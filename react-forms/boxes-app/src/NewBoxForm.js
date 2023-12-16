import React, { useState } from "react";
import "./NewBoxForm.css";
import { v4 as uuid } from 'uuid';

/** Form for creating a new box to add to BoxList.
 * 
 * Props:
 * - createBox: function to create a new box
 * - When the form is submitted, clears the input values.
 * 
 * State:
 * - formData: {height, width, backgroundColor}
 * 
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  

  /** Send {height, width, backgroundColor} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

   /** Update local state w/curr state of input elem */

   const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

 

  /** render form */
  return (
   <div className="enterForm">
    <form onSubmit={handleSubmit}>
      <div>
       <label htmlFor="height">Height:  </label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input
          onChange={handleChange}
          type="text"
          name="width"
          value={formData.width}
          id="width"
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color: </label>
        <input
          onChange={handleChange}
          type="text"
          name="backgroundColor"
          value={formData.backgroundColor}
          id="backgroundColor"
        />
      </div>

      <button>Add a new box!</button>
    </form>
  </div>
  );
}

export default NewBoxForm;