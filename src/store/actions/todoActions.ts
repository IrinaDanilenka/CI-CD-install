import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./todoActionsTypes"

export const addTask = (text: string) => {
    return ({
        type: ADD_TASK,
        payload: text,
    })
}

export const deleteTask = (id: string) => {
    return ({
        type: DELETE_TASK,
        payload: id,
    })
}

export const editTask = (id: string, text: string) => {
    return ({
        type: EDIT_TASK,
        payload: { id, text },
    })
}
