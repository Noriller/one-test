import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(c => c - 1)}>-1</button>
      <div data-testid='counter'>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}

export default App;
