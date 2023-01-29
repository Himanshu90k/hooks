import { useState, useReducer } from 'react';

const ACTIONS = {
  ADD_TASK: "add_task"
};

const reducer = (todos, action) => {
  switch (action.types) {
    case ACTIONS.ADD_TASK:
      return [...todos, addTask(action.payload.task)];
    default:
      return todos;
  };
};

const addTask = (taskName) => {
  return {id: Date.now(), complete: false, task: taskName};
};

const App = () => {

  const [taskName, setTaskName] = useState("");

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
    </>
  );
};

export default App;