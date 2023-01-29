import { useState, useReducer, } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TASK: "add_task",
  TOGGLE_TASK: "toggle_task",
  DELETE_TASK: "delete_task"
};

const App = () => {

  const addTask = (taskName) => {
    return {id: Date.now(), complete: false, task: taskName};
  };

  const reducer = (todos, action) => {
    switch (action.types) {
      case ACTIONS.ADD_TASK:
        return [...todos, addTask(action.payload.task)];
      case ACTIONS.TOGGLE_TASK:
        return todos.map((todo) => {
          if(todo.id === action.payload.id) {
            return {...todo, complete: !todo.complete};
          } else {
            return todo;
          }
        })
      case ACTIONS.DELETE_TASK:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  };

  const [taskName, setTaskName] = useState(() =>  "");

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({types: ACTIONS.ADD_TASK, payload: {task: taskName}});
    setTaskName("");
  };

  console.log(todos);

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label title="Task input"/>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Add Task"/>
      </form>

      {
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })
      }
    </>
  );
};

export default App;