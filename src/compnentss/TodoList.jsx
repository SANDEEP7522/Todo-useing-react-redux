import { useSelector } from "react-redux";
import TodoItem from "./todoItem";
 function TodoList(  ){
    const todos = useSelector(state => state.todoState.todos);
        return(
            
            <div>
                Todos List:
                {todos.map(todoItem => {
                    return(
                        <TodoItem key={todoItem.id} 
                        text={todoItem.text} 
                        id={todoItem.id}
                        isComleted={todoItem.comleted} />
                    )
                })}
            </div>
        )

 }
 export default TodoList;