import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'abcd'
        },
        {
            id: 2,
            title: 'efgh'
        }
    ]);

    return (
        <ul>
            {tasks.map( task => (
                <li key={task.id}>{task.title}</li> 
            ))}
        </ul>
    )
}

export default TodoList
