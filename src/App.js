import { useState } from 'react';

const App = () => {

  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskName("");
  };

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