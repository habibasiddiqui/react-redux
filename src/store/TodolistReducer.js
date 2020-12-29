import { add, del, edit, delAll } from "./Actions";

const initState = {
    tasks: [
        {
            id:1,
            title: 'abc'
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
                    item.title=action.payload.edited
            })
            // console.log(temp)
            return {
                ...state,
                tasks: temp
            }
        case delAll:
            let emptyTasks = [...state.tasks];
            emptyTasks = []
            return {

                ...state,
                tasks: [...emptyTasks]
 
            }
            // state.tasks.length = 0;
            // return state;
        default:
            return state;
    }
}

export default TodolistReducer;