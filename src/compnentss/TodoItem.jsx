import { useDispatch } from "react-redux";
import { removeTodoActionCreater } from "../Redux/actions/todoAction";


function TodoItem( {id, text, isCompleted} ){

 const dispatch = useDispatch();
  function removeTodo() {
    dispatch(removeTodoActionCreater(id));
  }

   return(
    <div className="todo-item">
        <input type="checkbox" checked= {isCompleted} />
        <p>{text}</p>
        <button onClick={removeTodo}>Dell</button>
    </div>
   ) 
}
export default TodoItem;