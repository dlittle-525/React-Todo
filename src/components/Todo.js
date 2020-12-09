import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log("Todo props: ", props);
    console.log("Todo Id: ", props.todo.id);
    return (
        <div className={`todo${props.todo.completed ? ' completed' : ''} `}
        onClick={() => props.toggleCompleted(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;