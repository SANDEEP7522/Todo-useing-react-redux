import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../components/constants"

const initialState = {
    todos: []
}

export default function todoReducer(state = initialState, action){
  
    if(action.type === ADD_TODO)
    return{
     ...state,// deStracturing doto
     todos: [
        ...state.todos,{
            id: Date.now(),
            text: action.payload,
            completed: true
        }
     ]
   }

 else if (action.type === REMOVE_TODO) {
    return{
     ...state,
     todos: state.todos.filter(todo => todo.id !== action.payload)
    }
}
 else if (action.type === TOGGLE_TODO){ 
        return{
         ...state,
         todos: state.todos.map(todo => {
            if(todo.id === action.payload){
                return{
                    ...todo,
               completed: !todo.completed
            }   
         }
         else{
            return todo;
         }
         })
       }
    }
    else{
        return state;
    }
    
}
