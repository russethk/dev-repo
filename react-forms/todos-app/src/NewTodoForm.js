import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

/** Form for creating a new todo to add to TodoList.
 * Renders a form with one text input for the task to be created. 
 * When the form is submitted, a new Todo component is created.
 * 
 * Props:
 * - createTodo: function to create a new todo
 * - When the form is submitted, clears the input value.
 * 
 * State:
 * - formData: {task}
 * 
 * App -> TodoList -> NewTodoForm
 */

function NewTodoForm({ createTodo }) {
    const [formData, setFormData] = useState({
        task: ''
    });
    
    /** Send {task} to parent
     *    & clear form. */
    
    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo({ ...formData, id: uuid() });
        setFormData({ task: '' });
    };
    
    /** Update local state w/curr state of input elem */
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
        ...formData,
        [name]: value
        }));
    };
    
    /** render form */
    return (
     <div className='NewTodoForm'>
        <form onSubmit={handleSubmit}>
            <h4>ToDo List</h4>
            <div>
            <label for='task'>Task</label>
            <input
                onChange={handleChange}
                type='text'
                name='task'
                placeholder="Enter Task"
                value={formData.task}
                id='task'
            />
            </div>
            <button>Add a ToDo!</button>
        </form>
        </div>
    );
}

export default NewTodoForm;