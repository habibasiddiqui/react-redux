
// COUNTER


// const increment = 'INCREMENT';
// const decrement = 'DECREMENT';


// export const incAction = () => ({
//     type: increment
// });

// export const decAction = () => ({
//     type: decrement
// });





//  TODO LIST


export const add = 'ADD';
export const del = 'DELETE';
export const edit = 'EDIT';
export const delAll = 'DELETE_ALL';

export const addAction = (task) => ({
    type: add,
    payload: task
}
)

export const delAction = (id) => ({
    type: del,
    payload: id
}
)

export const editAction = (obj) => ({
    type: edit,
    payload: obj
}
)

export const delAllAction = () => ({
    type: delAll
    
}
)