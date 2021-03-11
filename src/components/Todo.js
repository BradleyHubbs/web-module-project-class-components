// This component takes in the todo data (mapped in todolist) and displays the task
import React from 'react';



function Todo(props) {
    return (
        <div>
            <p style={{ textDecoration: props.todo.completed ? 'line-through' : null}} onClick={()=> props.toggleCompleted(props.todo.id)}>
                {props.todo.task}
            </p>
        </div>
    )
}

export default Todo;