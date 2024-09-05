import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../components/constants.js"


export function addTodoActionCreater(todo){
    return{
        type: ADD_TODO,
        payload: todo
    }
}
export function removeTodoActionCreater(todoId){
    return{
        type: REMOVE_TODO,
        payload: todoId
    }
}
export function toggleTodoActionCreater(todoId){
    
    return{
        type: TOGGLE_TODO,
        payload: todoId
    }
}
