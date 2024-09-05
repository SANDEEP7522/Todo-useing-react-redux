import { ADD_USER } from "../components/constants";

const initialState ={
    users:[]
}

export default function userReducer(state = initialState, action) {
    
    if (action.type == ADD_USER) {
        return{
             ...state,
            users:[
                ...state.users,
                action.payload
            ]
        }
    }
    else{
        return state;
    }
    
}
