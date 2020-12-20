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
import addAction from '../store/Actions';

function AddTodos({addTask}) {
    const dispatch = useDispatch();
    
    let [title, setTitle] = useState('');
    
    const handleChange = (e) => {
        // console.log('in change');
        setTitle(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('in submit');
        addTask(title);
        // e.target.firstChild.value='';
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={handleChange}/>
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}

export default AddTodos

