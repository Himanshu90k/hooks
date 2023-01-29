import { ACTIONS } from "./App";

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span style={{ color: todo.complete ? "blue" : "green"}}>{todo.task}</span>
            <button onClick={() => dispatch({types: ACTIONS.TOGGLE_TASK, payload: {id:todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({types: ACTIONS.DELETE_TASK, payload: {id: todo.id}})}>Delete</button>
        </div>
    );
};

export default Todo;