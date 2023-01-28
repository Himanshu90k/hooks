import { ACTIONS } from "./App";

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span style={{color: todo.complete ? "green" : "black"}}>{todo.name}</span>
            <button onClick={dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>toggle</button>
            <button onClick={dispatch({type: ACTIONS.DELETE_TODO, payload: todo.id})}>delete</button>
        </div>    
    );
};

export default Todo;