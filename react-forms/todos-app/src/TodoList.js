import React, { useState } from 'react';
import Todo from './Todo';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';

/** TodoList: maintains list of todos
 * - TodoList -> NewTodoForm
 * - TodoList -> Todo
 * 
 * Renders the NewTodoForm component 
 * Renders the list of Todo components
 * 
 * State:
 * - todos: array of objects
 * 
 * App -> TodoList -> {NewTodoForm, Todo}
 * 
 */

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    // add a new todo to todos array
    const add = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    };
    
    // remove a todo from todos array
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };
    
    // update a todo in todos array
    const update = (id, updatedTask) => {
        setTodos(todos => 
        todos.map(todo => 
            todo.id === id ? { ...todo, task: updatedTask } : todo
        )
        );
    };
    
    // render a list of todos
    const todoComponents = todos.map(todo => (
        <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        remove={remove}
        update={update}
        />
    ));
    
    return (
        <div>
        <NewTodoForm createTodo={add} />
        <section className="TodoList">{todoComponents}</section>
        </div>
    );
}

export default TodoList;