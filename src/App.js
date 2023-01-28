import { useState, useReducer } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo"
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return ([...todos, addTask(action.payload.name)]);
    // case ACTIONS.TOGGLE_TODO:
    //   return todos.map(todo => {
    //     if(todo.id === action.payload.id) {
    //       return {...todo, complete: !todo.complete};
    //     }
    //     return todo; 
    //   })
    default:
      return todos;
  };
};

const addTask = (name) => {
  return ({id: Date.now(), name: name, complete: false});
};

const App = () => {

  const [name, setName] = useState("");

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName("");
  }; 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
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