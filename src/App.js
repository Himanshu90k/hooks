import { useState } from 'react';

const App = () => {

  const [taskName, setTaskName] = useState("Enter Task");

  return(
    <>
      <form>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      </form>
    </>
  );
};

export default App;