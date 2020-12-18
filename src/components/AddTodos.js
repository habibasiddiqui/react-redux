import React, { useState } from 'react'

function AddTodos({}) {
    let [task, setTask] = useState([]);
    
    const handleChange = (e) => {
        console.log('in change');
        setTask(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('in submit');
        e.target.firstChild.value='';

    }

    console.log(task)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}/>
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}

export default AddTodos
