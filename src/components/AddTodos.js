// import React, { useState } from 'react'

// function AddTodos({addTask}) {
//     let [title, setTitle] = useState('');

//     const handleChange = (e) => {
//         // console.log('in change');
//         setTitle(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log('in submit');
//         addTask(title);
//         // e.target.firstChild.value='';
//         setTitle('');
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type='text' value={title} onChange={handleChange}/>
//                 <button type='submit'>Add</button>
//             </form>

//         </div>
//     )
// }

// export default AddTodos




// REDUX REDUX REDUX REDUX REDUX REDUX REDUX


import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {addAction} from '../store/Actions';
import { v4 as uuidv4 } from 'uuid';

function AddTodos() {

    const dispatch = useDispatch();

    let [task, setTask] = useState('');
    const handleChange = (e) => {
        // console.log('in change');
        setTask({
            id: uuidv4(),
            title: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('in submit');
        dispatch(addAction(task))
        e.target.firstChild.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'  onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>

        </div>
    )
}

export default AddTodos

