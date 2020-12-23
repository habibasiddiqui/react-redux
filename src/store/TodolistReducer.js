import { add, del, edit } from "./Actions";

const initState = {
    tasks: [
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

const TodolistReducer = (state = initState, action) => {
    switch (action.type) {
        case add:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case del:
            const newTasks = state.tasks.filter( item =>  item.id!=action.payload);
            return {
                ...state,
                tasks: newTasks
            }
        case edit:
            // console.log(action.payload.id)
            const temp = [...state.tasks];
            temp.find(item => {
                if(item.id == action.payload.id)
                    return item.title=action.payload.edited
            })
            // console.log(temp)
            return {
                ...state,
                tasks: temp
            }
        default:
            return state;
    }
}

export default TodolistReducer;