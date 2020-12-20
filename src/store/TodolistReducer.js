const initState = {
    tasks : [
        {
            id: 1,
            title: 'abc'
        },
        {
            id: 2,
            title: 'def'
        }
    ]
};

const TodolistReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                tasks: [...state.tasks, action.todo]
            }
            
    
        default:
            return state;
    }
}

export default TodolistReducer;