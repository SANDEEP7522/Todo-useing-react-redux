import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreater } from "../Redux/actions/todoAction";


function TodoInput(){
    const dispatch = useDispatch();// this dispatch method alredy conected with store.

    const [todo, setTodo] = useState(' ');

  function addTodoToStore() {
           dispatch(addTodoActionCreater(todo));
     }  
    return(
        <div>
            <input type="text"
             onChange = {e => setTodo(e.target.value)}
              value={todo} />
            <button onClick={addTodoToStore}>Add Todo ...</button>
        </div>
    ) 

}
export default TodoInput;