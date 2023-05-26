import {
    ACTION_TODO_CREATE,
    ACTION_TODO_REMOVE,
    ACTION_TODO_EDIT
} from '../actions/todo'

const DEFAULT_TODO = {
    done: false
};

const initialState = {
    list: [{
            "title": "make homework",
            "status": true,
            "done": false,
            "id": "96",
            "toDo": ""
        },
        {
            "title": "pet my dog",
            "status": true,
            "done": false,
            "id": "98",
            "toDo": ""
        },
        {
            "title": "cook a dinner",
            "status": true,
            "done": false,
            "id": "99",
            "toDo": ""
        },
        {
            "title": "Fuck russians misiles",
            "status": true,
            "done": false,
            "id": "100",
            "toDo": ""
        },
    ],
    todoEdit: DEFAULT_TODO,
}

export default function todoReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case ACTION_TODO_CREATE:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...payload,
                        id: Math.random()
                    },
                ],
            }
            case ACTION_TODO_REMOVE:
                const newList = state.list.filter(todo => todo.id !== payload)

                return {
                    ...state, list: newList
                }

                case ACTION_TODO_EDIT:
                    return {
                        ...state,
                        todoEdit: {
                            ...state.todoEdit,
                            ...payload
                        }
                    };


                default:
                    return state;
    }
}