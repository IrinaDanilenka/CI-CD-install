import { Todo } from "../../types/todo";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/todoActionsTypes";

interface TodoState {
    todoList: Todo[];
}

const initialState: TodoState = {
    todoList: [],
}

export const todoreducer = (state: TodoState = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: Date.now().toString(),
                        text: action.payload,
                        completed: false,
                    }
                ]
            }
        case DELETE_TASK:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            }
        case EDIT_TASK:
            return {
                ...state,
                todoList: state.todoList.map(item => item.id === action.payload.id ? {...state.todoList, text: action.payload.text} : item)
            }
        default:
            return state;
    }

}