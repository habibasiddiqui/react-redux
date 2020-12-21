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
import { delAction, editAction } from '../store/Actions';

function TodoList() {
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks)

    // const addTask = (title) => {
    //             setTasks([...tasks, { id: uuidv4(), title }]);
    //         }
    
    const handleDelete = (id) => {
        dispatch(delAction(id));
    }

    const handleEdit = (id, title) => {
        const edited = prompt('Enter task: ', title)
        dispatch(editAction({edited, id}));

    }

    return (
        <div>
            <AddTodos  />
            <ul>
                {tasks.map( item => (
                    <li key={item.id}>{item.title}&nbsp; &nbsp; &nbsp;
                    <button onClick={()=>handleEdit(item.id, item.title)}>Edit</button> 
                    <button onClick={()=>handleDelete(item.id)}>Del</button>
                    </li> 
                    
                ))}
            </ul>

            {/* <button onClick={() => dispatch(addAction())}>Add</button> */}

        </div>
    )
}

export default TodoList
