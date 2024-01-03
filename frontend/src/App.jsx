import { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3030/todos");
        const json = await res.json();
        setTodos(json);
        console.log(json);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
