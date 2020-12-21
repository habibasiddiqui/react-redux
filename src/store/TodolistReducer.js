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
            console.log(action.payload)
            const index = state.tasks.indexOf(action.payload.id);
            const temp = [...state.tasks];
            temp.map(item => {
                if(item.id==index)
                    temp[index].title=action.payload.edited
            })
            console.log(temp)
            // const temp = state.tasks.map(item => {
            //     if(item.id==action.payload.id)
            //       item.title=action.payload.edited
            // })
            // return {
            //     ...state,
            // }

            // const changed = state.tasks.filter( item => item.id!=action.payload.id)
            
            // console.log(state, changed)
            // return {
            //     ...state,
            //     tasks: [...changed, action.payload]
            // }


        default:
            return state;
    }
}

export default TodolistReducer;