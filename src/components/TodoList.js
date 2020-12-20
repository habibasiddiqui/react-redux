// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import AddTodos from './AddTodos'

// function TodoList() {
//     const [tasks, setTasks] = useState([
//         {
//             id: 1,
//             title: 'abcd'
//         },
//         {
//             id: 2,
//             title: 'efgh'
//         }
//     ]);

//     const addTask = (title) => {
//         setTasks([...tasks, { id: uuidv4(), title }]);
//     }
//     return (
//         <div>
//             <ul>
//                 {tasks.map( item => (
//                     <li key={item.id}>{item.title}</li> 
//                 ))}
//             </ul>
//             <AddTodos addTask={addTask} />
//         </div>
//     )
// }

// export default TodoList





// REDUX REDUX REDUX REDUX REDUX REDUX REDUX


import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodos from './AddTodos'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import addAction from '../store/Actions';

function TodoList() {
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks)
    
    return (
        <div>
            <ul>
                {tasks.map( item => (
                    <li key={item.id}>{item.title}</li> 
                ))}
            </ul>
            {/* <AddTodos addTask={addTask} /> */}
            <button onClick={() => dispatch(addAction())}>Add</button>
        </div>
    )
}

export default TodoList
