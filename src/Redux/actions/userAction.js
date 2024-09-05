import { ADD_USER } from "../components/constants";

export function addUserActionCreation(user){
    return{
        type: ADD_USER,
        payload: user
    }    
}
